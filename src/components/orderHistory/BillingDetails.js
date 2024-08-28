import { fetchOrder } from "../../utils/APIs/Order_APIs";
import { useQuery } from "@tanstack/react-query";
import { format } from 'date-fns';
import { fetchOrderVoucher, getVoucher } from "../../utils/APIs/Voucher_APIs";

const BillingDetails = (props) => {
  const orderId = props.data;

  const{
    data: order,
    error: orderError,
    isLoading: loadingOrder
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: ()=> fetchOrder(orderId)
  })

  const{
    data: orderVoucher,
    error: orderVoucherError,
    isLoading: orderVoucherIsLoading
  } = useQuery({
    queryKey: ["orderVoucher", orderId],
    queryFn: () => fetchOrderVoucher(orderId)
  })

  const{
    data: voucher,
    error: voucherError,
    isLoading: voucherIsLoading,
    
  } = useQuery({
    queryKey: ["orderVoucher", orderId],
    queryFn: () => getVoucher(orderVoucher.voucher_id),
    enabled: !!orderVoucher
  })

  if(loadingOrder) return <div>Loading...</div>
  if(orderError) return <div>Error</div>

  if(orderVoucherIsLoading) return <div>Loading...</div>
  if(orderVoucherError) return <div>Error</div>

  if(voucherIsLoading) return <div>Loading...</div>
  if(voucherError) return <div>Error</div>

  return(
    <>
      <div className="flex flex-col bg-gray-200 mx-8 my-4 rounded py-2 gap-1">
          <div className="flex flex-row justify-between px-6">
            <span className="font-medium">Bill</span>
            <span>${order.bill}</span>
          </div>
          {orderVoucher &&
            <div className="flex flex-row justify-between px-6">
              <span className="font-medium">Voucher Code</span>
              <span>{voucher.voucher_code}</span>
            </div>
          }
         
          <div className="flex flex-row justify-between px-6">
            <span className="font-medium">Billing Address</span>
            <span>{order.billing_address}</span>
          </div>
          <div className="flex flex-row justify-between px-6">
            <span className="font-medium">Shipping Address</span>
            <span>{order.shipping_address}</span>
          </div>
          <div className="flex flex-row justify-between px-6">
            <span className="font-medium">Date</span>
            <span>{format(new Date(order.created_at), 'dd/MM/yyyy')}</span>
          </div>
        </div>
        {(order.order_status == 'placed' || order.order_status == 'processed') &&
          <div className="flex justify-end mr-8 mb-2">
            <button className="text-sm text-red-700 underline">Cancel Order</button>
          </div>
        }
    </>
  );
}

export default BillingDetails;