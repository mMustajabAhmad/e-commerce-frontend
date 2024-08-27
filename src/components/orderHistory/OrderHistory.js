import Footer from "../shop/Footer";
import Header from "../shop/Header";
import Modal from "./OrderDetailsModal";
import { useState } from "react";
import OrderItems from "./OrderItems";
import BillingDetails from "./BillingDetails";

const OrderHistory = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const tableRows=[]

  for (let i=0;i<20;i++){
    tableRows.push(
      <tr className="border">
        <th className="px-6 py-3">1</th>
        <th className="px-6 py-3">02/11/2024</th>
        <th className="px-6 py-3">$1000</th>
        <th className="px-6 py-3">
          <div className="bg-emerald-100 rounded"><span className="text-green-800">Shipped</span></div>
        </th>
        <th className="px-6 py-3">
          <div className="bg-red-100 rounded"><span className="text-red-800">Pending</span></div>
        </th>
        <th className="px-6 py-3"><button className="underline" onClick={handleOpen}>View</button></th>
      </tr>
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
          <span className="text-2sm font-medium">Order Items</span>
        </div>
        <OrderItems />
        <BillingDetails />
      </Modal>
    </>

    
  );
};
export default OrderHistory;
