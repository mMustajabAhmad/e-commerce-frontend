import { format } from 'date-fns';
import { getPaymentInfo } from '../../utils/APIs/Payment_APIs';
import { useQuery } from "@tanstack/react-query"
import { Link } from 'react-router-dom';

const OrderRow = (props) => {
  const order = props.order;
  const handleOpen = props.handleOpen
  const setOrderId = props.setOrderId

  const {
    data: payment,
    error: paymentError,
    isLoading: paymentIsLoading
  } = useQuery({
    queryKey: ["payment", order.id],
    queryFn: () => getPaymentInfo(order.id)
  })

  if (paymentIsLoading) return <div>Payment is Loading...</div>
  if (paymentError) return <div>Payment Error</div>

  return (
    <>
      <tr className="border">
        <th className="px-6 py-3">{order.id}</th>
        <th className="px-6 py-3">
          {format(new Date(order.created_at), "dd/MM/yyyy")}
        </th>
        <th className="px-6 py-3">${payment?.bill}</th>
        <th className="px-6 py-3">
          {order.order_status == "placed" && (
            <div className="bg-orange-100 rounded">
              <span className=" text-orange-800">Placed</span>
            </div>
          )}
          {order.order_status == "processed" && (
            <div className="bg-blue-100 rounded">
              <span className="text-blue-800">Processed</span>
            </div>
          )}
          {order.order_status == "shipped" && (
            <div className="bg-lime-100 rounded">
              <span className="text-lime-800">Shipped</span>
            </div>
          )}
          {order.order_status == "delivered" && (
            <div className="bg-emerald-100  rounded">
              <span className="text-emerald-800">Delivered</span>
            </div>
          )}
          {order.order_status == "cancelled" && (
            <div className="bg-red-100  rounded">
              <span className="text-red-800">Cancelled</span>
            </div>
          )}
        </th>
        <th className="px-6 py-3">
          {payment?.payment_status == 'pending' && order.shipping_method == 'stripe' && order.order_status != "cancelled" &&
             <div className="bg-red-100 rounded">
                <Link to={`/payNow/${order.id}`}>
                  <span className="text-red-800">Pay Now</span>
                </Link>
              </div>
          }
          {payment?.payment_status == 'pending' && order.shipping_method == 'COD' &&  order.order_status != "cancelled" &&
             <div className="bg-red-100 rounded">
                  <span className="text-red-800">Pending</span>
              </div>
          }

          {order.order_status == "cancelled" && payment?.payment_status == 'pending'&&
            <div className="bg-red-100 rounded">
              <span className="text-red-800">Cancelled</span>
            </div>
          }

          {payment?.payment_status == 'paid' &&
             <div className="bg-emerald-100 rounded">
                <span className="text-emerald-800">Paid</span>
              </div>
          }
         
        </th>
        {order.shipping_method == 'COD' ?
          <th className="px-6 py-3">Cash on Delivery</th> :
          <th className="px-6 py-3">Stripe</th>
        }
        
        <th className="px-6 py-3">
          <button
            className="underline"
            onClick={() => {
              handleOpen();
              setOrderId(order.id);
            }}
          >
            View
          </button>
        </th>
      </tr>
    </>
  );
};

export default OrderRow;
