import { Link, useNavigate } from "react-router-dom";
import {
  getParentCategories
} from "../../utils/CategoryUtils";
import { getCurrentUserId } from "../../utils/JWT_TokenDecoder";
import CartProduct from "../cart/CartProduct";
import ProfileMenu from "./ProfileMenu";
import CategoriesMenu from "./CategoriesMenu";
import Modal from "../cart/CartModal";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchCart } from "../../utils/APIs/Cart_APIs";
import { BsTrash3 } from "react-icons/bs";
import { clearCart } from "../../utils/APIs/Cart_APIs";
import { CiShoppingCart } from "react-icons/ci";
import { CgSearch } from "react-icons/cg";
import { fetchCategories } from "../../utils/APIs/Category_APIs";
import { PiCoinsDuotone } from "react-icons/pi";
import RedeemPointsModal from "../redeemPoints/redeemPointsModal";
import AvailablePoint from "../redeemPoints/AvailablePoint";
import ExpiredPoint from "../redeemPoints/ExpiredPoint";
import { fetchTotalPointsAvailable, fetchAvailablePoints, fetchExpiredPoints, fetchRedeemedPoints, fetchRedeemPolicy } from "../../utils/APIs/RedeemPoints_APIs";
import RedeemedPoint from "../redeemPoints/RedeemPoints";

function Header() {
  const queryClient = useQueryClient();
  const user_id = getCurrentUserId();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [search, setSearch] = useState(true);
  const [selectedOption, setSelectedOption] = useState('Earned');

  const [openRedeemPoints, setOpenRedeemPoints] = useState(false);
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseRedeemPoints = () => {
    setOpenRedeemPoints(false);
  };

  const handleOpenRedeemPoints = () => {
    setOpenRedeemPoints(true);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectedOption = (value) =>{
    setSelectedOption(value);
  }

  const handleKeyDown = (event) =>{
    if(event.key == 'Enter'){
      setSearch(true);
      search && navigate(`/searchedProducts/${searchQuery}`);
      setSearchQuery('')
    };
    }

  const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
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

  const{
    data: totalPoints,
    error: totalPointsError,
    isLoading: loadingTotalPoints
  } = useQuery({
    queryKey: ["totalPoints"],
    queryFn: ()=>fetchTotalPointsAvailable()
  })

  const{
    data: availablePoints,
    error: availablePointsError,
    isLoading: loadingAvailablePoints,
  } = useQuery({
    queryKey: ["availablePoints"],
    queryFn: ()=> fetchAvailablePoints()
  })

  const{
    data: expiredPoints,
    error: expiredPointsError,
    isLoading: loadingExpiredPoints,
  } = useQuery({
    queryKey: ["expiredPoints"],
    queryFn: ()=> fetchExpiredPoints()
  })

  const{
    data: redeemedPoints,
    error: redeemedPointsError,
    isLoading: loadingRedeemedPoints
  } = useQuery({
    queryKey: ["redeemedPoints"],
    queryFn: () => fetchRedeemedPoints()
  })
  
  const{
    data: redeemPolicy,
    error: redeemPolicyError,
    isLoading: loadingRedeemPolicy
  } = useQuery({
    queryKey: ["redeemPolicy"],
    queryFn: ()=>fetchRedeemPolicy()
  })

  if (categoriesLoading ) return <div>Loading Cart...</div>;
  if (categoriesError ) return <div>Categories Error</div>;

  if (cartIsLoading) return <div>Loading Cart...</div>;
  if(cartError) return <div>Cart Error</div>;

  if (loadingTotalPoints) return <div>Loading Total Points...</div>;
  if (totalPointsError) return <div>Error in Loading Total Points</div>;

  if (loadingAvailablePoints) return <div>Loading Available Points...</div>;
  if (availablePointsError) return <div>Error in Loading Available Points</div>;

  if (loadingExpiredPoints) return <div>Loading Expired Points...</div>;
  if (expiredPointsError) return <div>Expired Points Error</div>;

  if (loadingRedeemedPoints) return <div>Loading Redeemed Points...</div>;
  if (redeemedPointsError) return <div>Redeemed Points Error</div>;

  if (loadingRedeemPolicy) return <div>Loading Redeem Policy...</div>
  if (redeemPolicyError) return <div>Redeem Policy Error</div>

  const parentCategories = getParentCategories(categories);
  const cartProducts = [];

  for (let i = 0; i < cartData.cart.length; i++) {
    if(i==cartData.cart.length - 1){
      cartProducts.push(
        <>
          <CartProduct data={cartData.cart[i]} />
        </>
        );
    }else{
      cartProducts.push(
        <>
          <CartProduct data={cartData.cart[i]} />
          <hr className="mx-6 my-2"/>
        </>
        );
    }
    
  }

  const listOfAvailablePoints = [];
  for(let i=0; i<availablePoints.available_points.length;i++){
    listOfAvailablePoints.push(<AvailablePoint data={availablePoints.available_points[i]}/>);
  }

  const listOfExpiredPoints = [];
  for(let i=0; i<expiredPoints.expired_points.length; i++){
    listOfExpiredPoints.push(<ExpiredPoint/>)
  }

  const listOfRedeemedPoints = [];
  for(let i=0; i<redeemedPoints.redeem_points.length; i++){
    listOfRedeemedPoints.push(<RedeemedPoint data={redeemedPoints.redeem_points[i]}/>);
  }

  console.log("REDEEM POLICY", redeemPolicy)

  return (
    <>
      <header>
        <nav className="bg-white h-20">
          <div className="flex flex-row justify-between pt-3">
            <div className="flex flex-row gap-10 items-center ml-4 font-medium">
              <span className="font-bold text-5xl">Flone.</span>
              <Link to="/home" className="hover:text-purple-700">
                Home
              </Link>
              <Link to="/shop" className="hover:text-purple-700">
                Shop
              </Link>
              <CategoriesMenu
                categories={categories}
                parentCategories={parentCategories}
              />

              <Link to="#" className="hover:text-purple-700">
                About Us
              </Link>
              <Link
                to="https://wa.me/+923356517758"
                target="_blank"
                className="hover:text-purple-700"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex flex-row items-center gap-4 mr-4">
              <div className="flex flex-row gap-1 items-center border border-black px-2 rounded-lg overflow-hidden">
                <input
                  className="rounded  px-3 py-2 outline-none bg-transparent"
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                  onKeyDown={handleKeyDown}
                />
                <CgSearch className="" size={"1.5em"} onClick={()=>{setSearch(true); search && navigate(`/searchedProducts/${searchQuery}`); setSearchQuery('')}}/>
              </div>
              <div className="flex flex-row py-1 px-4 gap-1">
                <PiCoinsDuotone size={"1.5em"} onClick={handleOpenRedeemPoints} className="text-yellow-600"/>
              </div>
              <ProfileMenu />
              <div className="flex flex-col items-center">
              <span className="absolute rounded-xl w-5 h-5 flex justify-center items-center translate-x-2 -translate-y-1.5 bg-purple-700 text-white text-xs">
                  {cartData.cart.length}
                </span>
                <CiShoppingCart
                  strokeWidth={0.5}
                  className="cursor-pointer"
                  size={"2em"}
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
                    {cartData.cart.length}
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

      <RedeemPointsModal isOpen={openRedeemPoints} onClose={handleCloseRedeemPoints}>
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-center font-medium text-2xl bg-black py-4 text-white">
            <span>Rewards</span>
          </div>
          <div className="flex flex-col bg-slate-200 items-center gap-2 py-6">
            <span className="text-xl">Available Points</span>
            <div className="border border-purple-800 p-1 bg-purple-200 rounded-[4em]">
              <div className="bg-purple-200 p-6 rounded-[4em] border border-purple-800 flex flex-col h-[6em] w-[6em] justify-center items-center font-medium">
                <span className="text-2xl text-purple-900">{totalPoints.available_points}</span>
                <span className="text-xs">Points</span>
              </div>
            </div>
            <div className="bg-purple-700 text-white font-medium py-1 px-10 absolute translate-y-[7.5em] rounded">
              <span>${totalPoints.available_points*redeemPolicy.redeem_policy.point_value}</span>
            </div>
          </div>
          <div className="flex flex-row bg-purple-200 rounded-xl mx-4 mt-2 h-[25px]">
            {selectedOption == 'Earned' &&
              <>
                <div className="bg-purple-700 rounded-xl w-1/3 flex justify-center items-center text-white font-medium" onClick={() => handleSelectedOption('Earned')}>Earned</div>
                <div className="w-1/3 flex justify-center items-center font-medium" onClick={() => handleSelectedOption('Redeemed')}>Redeemed</div>
                <div className="w-1/3 flex justify-center items-center font-medium" onClick={() => handleSelectedOption('Expired')}>Expired</div> 
              </> 
            }
            {selectedOption == 'Redeemed' &&
              <>
                <div className=" rounded-xl w-1/3 flex justify-center items-center font-medium" onClick={() => handleSelectedOption('Earned')}>Earned</div>
                <div className="bg-purple-700 text-white w-1/3 flex justify-center items-center font-medium rounded-xl" onClick={() => handleSelectedOption('Redeemed')}>Redeemed</div>
                <div className="w-1/3 flex justify-center items-center font-medium" onClick={() => handleSelectedOption('Expired')}>Expired</div> 
              </> 
            }
            {selectedOption == 'Expired' &&
              <>
                <div className="rounded-xl w-1/3 flex justify-center items-center font-medium" onClick={() => handleSelectedOption('Earned')}>Earned</div>
                <div className="w-1/3 flex justify-center items-center font-medium" onClick={() => handleSelectedOption('Redeemed')}>Redeemed</div>
                <div className="bg-purple-700 text-white w-1/3 flex justify-center items-center font-medium rounded-xl" onClick={() => handleSelectedOption('Expired')}>Expired</div> 
              </> 
            }
            </div>

          {selectedOption == 'Earned' &&
            <div className="flex flex-col my-4 mx-4 overflow-auto">
              {listOfAvailablePoints}
            </div>
          }

          {selectedOption == 'Redeemed' &&
            <div className="flex flex-col my-4 mx-4 overflow-auto">
              {listOfRedeemedPoints}
            </div>
          }

          {selectedOption == 'Expired' &&
            <div className="flex flex-col my-4 mx-4 overflow-auto">
              {listOfExpiredPoints}
            </div>
          }
        </div>
        
      </RedeemPointsModal>
    </>
  );
}
export default Header;
