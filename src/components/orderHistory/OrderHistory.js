import Footer from "../shop/Footer";
import Header from "../shop/Header";
import Modal from "./OrderDetailsModal";
import { useState } from "react";
import OrderItems from "./OrderItems";
import BillingDetails from "./BillingDetails";
import { fetchOrders } from "../../utils/APIs/Order_APIs";
import { useQuery } from "@tanstack/react-query";
import { format } from 'date-fns';
import axios from "axios";
import OrderRow from "./OrderTableRow";

const OrderHistory = () => {
  const [open, setOpen] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const{
    data: orders,
    error: ordersError,
    isLoading: loadingOrders
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetchOrders()
  })

  

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  if (loadingOrders) return <div>Loading...</div>
  if (ordersError) return <div>Error</div>

  const tableRows=[]

  for (let i=0;i<orders.length;i++){
    tableRows.push(
      <OrderRow order={orders[i]} handleOpen={handleOpen} setOrderId={setOrderId}/>
      // <tr className="border">
      //   <th className="px-6 py-3">{orders[i].id}</th>
      //   <th className="px-6 py-3">{format(new Date(orders[i].created_at), 'dd/MM/yyyy')}</th>
      //   <th className="px-6 py-3">${orders[i].bill}</th>
      //   <th className="px-6 py-3">
      //     {orders[i].order_status == 'placed' && 
      //       <div className="bg-orange-100 rounded">
      //         <span className=" text-orange-800">{orders[i].order_status}</span>
      //       </div>
      //     }
      //     {orders[i].order_status == 'processed' && 
      //       <div className="bg-blue-100 rounded">
      //         <span className="text-blue-800">{orders[i].order_status}</span>
      //       </div>
      //     }
      //     {orders[i].order_status == 'shipped' && 
      //       <div className="bg-lime-100 rounded">
      //         <span className="text-lime-800">{orders[i].order_status}</span>
      //       </div>
      //     }
      //     {orders[i].order_status == 'delivered' && 
      //       <div className="bg-emerald-100  rounded">
      //         <span className="text-emerald-800">{orders[i].order_status}</span>
      //       </div>
      //     }
      //     {orders[i].order_status == 'cancelled' && 
      //       <div className="bg-red-100  rounded">
      //         <span className="text-red-800">{orders[i].order_status}</span>
      //       </div>
      //     }
      //   </th>
      //   <th className="px-6 py-3">
      //     <div className="bg-red-100 rounded"><span className="text-red-800">Pending</span></div>
      //   </th>
      //   <th className="px-6 py-3"><button className="underline" onClick={()=>{handleOpen();setOrderId(orders[i].id)}}>View</button></th>
      // </tr>
    );
  }

  return (
    <>
      <>
        <Header />
        <main className="min-h-screen border">
          <div className="h-20 flex justify-center bg-gray-200">
            <span className="font-medium text-3xl mt-4">Order History</span>
          </div>
          <div className="overflow-auto h-[35em] ml-52 mt-10 w-2/3">
            <table className="w-full border ">
              <thead className="bg-gray-100 text-lg">
                <tr>
                  <th className="px-6 py-3">Order #</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Bill</th>
                  <th className="px-6 py-3">Order Status</th>
                  <th className="px-6 py-3">Payment Status</th>
                  <th className="px-6 py-3">View Details</th>
                </tr>
              </thead>
              <tbody className=" text-sm font-normal">
                {tableRows}
              </tbody>
            </table>
          </div>
        </main>
        <Footer />
      </>
      <Modal isOpen={open} onClose={handleClose}>
        <div className="flex flex-row justify-center bg-gray-200 mt-4 mx-8 rounded border">
          <span className="text-sm font-medium">Order Items</span>
        </div>
        <OrderItems data={orderId}/>
        <BillingDetails data={orderId}/>
      </Modal>
    </>

    
  );
};
export default OrderHistory;
