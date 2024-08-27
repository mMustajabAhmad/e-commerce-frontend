import { useQuery } from "@tanstack/react-query";
import OrderItem from "./OrderItem";
import { fetchOrderDetails } from "../../utils/APIs/Order_APIs";

const OrderItems = (props) => {
  const orderId = props.data;

  const{
    data: orderDetails,
    error: orderDetailsError,
    isLoading: loadingOrderDetails
  } = useQuery({
    queryKey: ["orderDetails", orderId],
    queryFn: ()=> fetchOrderDetails(orderId)
  })
  
  if(loadingOrderDetails) return <div>Loading...</div>
  if(orderDetailsError) return <div>Error</div>

  const orderItems = [];
  for(let i=0; i<orderDetails.length; i++){
    orderItems.push(
      <OrderItem data={orderDetails[i]} />
    );
  }

  return (
    <>
      <div className="flex flex-col gap-2 mx-8 border h-[14em] overflow-auto rounded ">
        {orderItems}
      </div>
    </>
  );
};

export default OrderItems;