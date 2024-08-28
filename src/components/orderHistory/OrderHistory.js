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
          <div className="overflow-auto h-[35em] mx-48 mt-10 ">
            <table className="w-full border ">
              <thead className="bg-gray-100 text-lg">
                <tr>
                  <th className="px-6 py-3">Order #</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Bill</th>
                  <th className="px-6 py-3">Order Status</th>
                  <th className="px-6 py-3">Payment Status</th>
                  <th className="px-6 py-3">Shipping Method</th>
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
