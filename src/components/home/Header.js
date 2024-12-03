import { Link } from "react-router-dom";
import { getParentCategories } from "../../utils/CategoryUtils";
import CartProduct from "../cart/CartProduct";
import { CgSearch } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ProfileMenu from "./ProfileMenu";
import CategoriesMenu from "./CategoriesMenu";
import { IoCloseOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import React from "react";
import Modal from "../cart/CartModal";
import { fetchCart } from "../../utils/Cart_APIs";
import { BsTrash3 } from "react-icons/bs";
import { clearCart } from "../../utils/Cart_APIs";
import { getCurrentUserId } from "../../utils/JWT_TokenDecoder";
import { fetchCategories } from "../../utils/Category_APIs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const queryClient = useQueryClient();
  const user_id = getCurrentUserId();
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [search, setSearch] = useState(true);


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) =>{
    if(event.key == 'Enter'){
      setSearch(true);
      search && navigate(`/searchedProducts/${searchQuery}`);
      setSearchQuery('')
    };
  }

  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const {
    data: cartData,
    error: cartError,
    isLoading: cartIsLoading,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => fetchCart(),
  });

  const clearCartProduts = useMutation({
    mutationFn: () => clearCart(),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", user_id]);
    },
  });
  if (categoriesLoading || cartIsLoading) return <div>Loading...</div>;
  if (categoriesError || cartError) return <div>Error...</div>;

  const cart = cartData.cart_products;
  const parentCategories = getParentCategories(categories);
  const cartProducts = [];

  for (let i = 0; i < cart.length; i++) {
    if (i == cart.length - 1) {
      cartProducts.push(
        <>
          <CartProduct data={cart[i]} />
        </>
      );
    } else {
      cartProducts.push(
        <>
          <CartProduct data={cart[i]} />
          <hr className="mx-6 my-2" />
        </>
      );
    }
  }

  function logout() {
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("token");
  }

  return (
    <>
      <header>
        <nav className="bg-black h-20">
          <div className="flex flex-row gap-6 h-full flex-wrap justify-between items-center px-3">
            <div className="flex flex-row gap-6">
              <Link
                to="/home"
                className="text-white font-medium hover:text-purple-500"
              >
                <span>Home</span>
              </Link>
              <Link
                to="/shop"
                className="text-white font-medium hover:text-purple-500"
              >
                <span>Shop</span>
              </Link>
              <CategoriesMenu
                categories={categories}
                parentCategories={parentCategories}
              />
              <Link className="text-white font-medium hover:text-purple-500">
                <span>About Us</span>
              </Link>
              <Link
                className="text-white  font-medium hover:text-purple-500"
                to="https://wa.me/+923356517758"
                target="_blank"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            <span className="text-white font-bold text-5xl">Flone.</span>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row gap-1 items-center border-white border-2 px-2 rounded-lg overflow-hidden">
                <input
                  className="rounded text-white outline-none px-3 py-2 bg-transparent"
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                  onKeyDown={handleKeyDown}
                />
                <CgSearch className="text-white" size={"1.5em"} onClick={()=>{setSearch(true); search && navigate(`/searchedProducts/${searchQuery}`);}}/>
              </div>

              <ProfileMenu logout={logout} />
              <div className="flex flex-row gap-3">
                <CiShoppingCart
                  strokeWidth={1}
                  className="text-white cursor-pointer"
                  size={"1.5em"}
                  onClick={handleOpen}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Modal isOpen={open} onClose={handleClose}>
        <>
          <div className="flex flex-col w-full h-full">
            <div className="fixed top-0 w-[33%]">
              <div className="flex flex-row mt-6 mb-8 w-full justify-between">
                <div className="flex flex-row gap-2 ml-2">
                  <span>Cart Preview</span>
                  <div className="bg-purple-300 rounded-xl w-6 h-6 flex justify-center">
                    {cart.length}
                  </div>
                </div>
                <IoCloseOutline className="text-2xl" onClick={handleClose} />
              </div>
              <hr />
            </div>

            <div className="flex flex-col mt-[18%] h-[67%] ">
              <div className="flex flex-row gap-2 bg-slate-300 p-3 justify-center mx-6 rounded my-3">
                <CiDeliveryTruck className="text-2xl" />
                <span>Free delivery from $150</span>
              </div>
              <div className="w-full overflow-auto">{cartProducts}</div>
            </div>

            <div className="fixed bottom-0 w-full">
              <hr />
              <div className="flex flex-row w-[33%]">
                <div className="flex flex-row mt-2 justify-between w-full mx-6">
                  <span>Total</span>
                  <span>${cartData.total}</span>
                </div>
              </div>

              <div className="flex flex-col w-[33%] gap-y-2 my-5">
                {cartProducts.length > 0 && (
                  <>
                    <button
                      className="border p-3 rounded-md mx-6"
                      onClick={() => clearCartProduts.mutate()}
                    >
                      <div className="flex flex-row justify-center items-center gap-1">
                        <BsTrash3 />
                        <span>Clear Cart</span>
                      </div>
                    </button>
                    <button className="border bg-yellow-500 p-3 rounded-md mx-6">
                      <Link to="/checkout">
                        <span>Go to checkout</span>
                      </Link>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};

export default Header;
