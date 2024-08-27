import Footer from "../shop/Footer";
import Header from "../shop/Header";
import Modal from "./OrderDetailsModal";
import { useState } from "react";

const OrderHistory = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
        <div className="flex flex-col gap-2 mx-8 border h-[14em] overflow-auto rounded ">
          
          <div className="flex flex-row gap-5 my-2">
            <div className="flex flex-col ml-6 ">
              <img src='images/watch1.png' alt='image' className="h-28 w-28 rounded"/>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-2sm font-medium">Product Name</span>
              <span className="text-sm">$ 1000</span>
              <span className="text-sm">Size : <span className="text-red-700">S</span></span>
              <span className="text-sm">Quantity: 2</span>
              <span className="bg-gray-300 flex flex-row justify-center text-sm rounded">v123</span>
            </div>
          </div>

          <div className="flex flex-row gap-5 my-2">
            <div className="flex flex-col ml-6 ">
              <img src='images/watch1.png' alt='image' className="h-28 w-28 rounded"/>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-2sm font-medium">Product Name</span>
              <span className="text-sm">$ 1000</span>
              <span className="text-sm">Size : <span className="text-red-700">S</span></span>
              <span className="text-sm">Quantity: 2</span>
              <span className="bg-gray-300 flex flex-row justify-center text-sm rounded">v123</span>
            </div>
          </div>
          <hr className="mx-6"/>
        </div>

        <div className="flex flex-col bg-gray-200 mx-8 my-4 rounded py-4 gap-1">
          <div className="flex flex-row justify-between px-6">
            <span className="font-medium">Bill</span>
            <span>$1000</span>
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
      </Modal>
    </>

    
  );
};
export default OrderHistory;
