import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import MyProfile from "./components/userProfile/MyProfile";
import HomePage from "./components/home/HomePage";
import Shop from "./components/shop/Shop";
import Product from "./components/product/Product";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Categories from "./components/categories/Categories";
import CategoryProducts from "./components/categoryProductsAndSubCategories/CategoryProducts";
import { isTokenValid } from "./utils/LoginValidity";
import { Navigate } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import SearchedProducts from "./components/searchResults/SearchedProducts";
import StripeWrapper from "./components/checkout/Stripe";
import OrderHistory from "./components/orderHistory/OrderHistory";
import { fetchCart } from "./utils/APIs/Cart_APIs";
import { useQuery } from "@tanstack/react-query";
import { fetchOrder } from "./utils/APIs/Order_APIs";
import { getPaymentInfo } from "./utils/APIs/Payment_APIs";
import ResetPassword from "./components/ResetPassword";

const ConditionalRedirectForCheckout = () => {
  const {
    data: cartData,
    error: cartError,
    isLoading: cartIsLoading,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => fetchCart(),
  });
  if (cartIsLoading) return <div>Loading Cart...</div>
  if(cartError) return <div>Cart Error</div>;
  if (cartData.cart.length > 0) {
    return <Checkout/>;
  } else {
    return <Navigate to="/shop" />;
  }
};

const ConditionalRedirectForPayment = () => {
  const { order_id } = useParams();
  console.log("ORDER ID: ",order_id)
  const {
    data: order,
    error: orderError,
    isLoading: orderIsLoading
  } = useQuery({
    queryKey: ["order", order_id],
    queryFn: () => fetchOrder(order_id)
  })

  const {
    data: paymentInfo,
    error: paymentError,
    isLoading: paymentIsLoading
  } = useQuery({
    queryKey: ["payment", order_id],
    queryFn: () => getPaymentInfo(order_id)
  })

  if(orderIsLoading) return <div>Loading order...</div>
  if(orderError) return <Navigate to="/orderHistory" />;

  if(paymentIsLoading) return <div>Loading payment...</div>
  if(paymentError) return <Navigate to="/orderHistory" />;

  console.log("ORDER: ", order)

  if(order.payment_method == 'stripe' || paymentInfo.payment_status == 'pending' ){
    console.log("I'm inside if")
    return <StripeWrapper />
  }
  else{
    console.log("I'm outside if")
    return <Navigate to="/orderHistory"/>
  }
}


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetPassword" element={<ResetPassword/>}/>
        {isTokenValid() ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/myProfile" element={<MyProfile />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/categories" element={<Categories />} />
            <Route
              path="/categoryProducts/:id"
              element={<CategoryProducts />}
            />
            <Route path="/checkout" element={<ConditionalRedirectForCheckout/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/searchedProducts/:query" element={<SearchedProducts />} />
            <Route path="/payNow/:order_id" element={<ConditionalRedirectForPayment />} />
            <Route path="/orderHistory" element={<OrderHistory />}/>
          </>
        ) : (
          <Route path="*" element={<Navigate to="/signin" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
