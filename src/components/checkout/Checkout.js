import Header from "../shop/Header";
import Footer from "../shop/Footer";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { getCurrentUserId } from "../../utils/JWT_TokenDecoder";
import { useQuery } from "@tanstack/react-query";
import { fetchCart } from "../../utils/Cart_APIs";

const Checkout = () => {
  const user_id = getCurrentUserId();
  const {
    data: cartData,
    error: cartError,
    isLoading: cartIsLoading,
  } = useQuery({
    queryKey: ["cart", user_id],
    queryFn: () => fetchCart(user_id),
  });

  if (cartIsLoading) return <div>Cart is Loading...</div>;
  if (cartError) return <div>Error in Loading Cart</div>;

  const cart = cartData.cart_products;
  const bill = cartData.total;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="h-20 flex justify-center bg-gray-200 ">
          <span className="font-medium text-3xl mt-4">CHECKOUT</span>
        </div>
        <div className="flex flex-row w-full min-h-screen">
          <LeftPanel data={cart} />
          <RightPanel data={bill} />
        </div>
      </main>
      <Footer className="mt-auto" />
    </>
  );
};
export default Checkout;
