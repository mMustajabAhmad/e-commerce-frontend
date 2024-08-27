import { fetchOrderDetails } from "../../utils/APIs/Order_APIs";
import { useQuery } from "@tanstack/react-query";

const BillingDetails = (props) => {
  const orderId = props.data;
  console.log("ORDERRR IDD",orderId)

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

  console.log("order details ...", orderDetails)
  return(
    <>
      <div className="flex flex-col bg-gray-200 mx-8 my-4 rounded py-4 gap-1">
          <div className="flex flex-row justify-between px-6">
            <span className="font-medium">Bill</span>
            <span>${orderDetails.bill}</span>
          </div>
          <div className="flex flex-row justify-between px-6">
            <span className="font-medium">Voucher Code</span>
            <span>vouch123</span>
          </div>
          <div className="flex flex-row justify-between px-6">
            <span className="font-medium">Billing Address</span>
            <span>2-W-3 abc town, fsd</span>
          </div>
          <div className="flex flex-row justify-between px-6">
            <span className="font-medium">Shipping Address</span>
            <span>2-W-3 abc town, fsd</span>
          </div>
          <div className="flex flex-row justify-between px-6">
            <span className="font-medium">Date</span>
            <span>02/11/2024</span>
          </div>
        </div>
    </>
  );
}

export default BillingDetails;