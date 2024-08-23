import React from "react";
import Modal from "./CartSheet";
import { IoCloseOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsTrash3 } from "react-icons/bs";

export default function Example() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="flex justify-center">
      
      <button type="button" onClick={handleOpen}>
        Open Cart
      </button>
      <Modal isOpen={open} onClose={handleClose}>
        <>
          <div className="flex flex-col w-full h-full">
            <div className="fixed top-0 w-[33%]">
              <div className="flex flex-row mt-6 mb-8 w-full justify-between">
                <div className="flex flex-row gap-2 ml-2">
                  <span>Minicart Preview</span>
                  <div className="bg-purple-300 rounded-xl w-6 h-6 flex justify-center">3</div>
                </div>
                <IoCloseOutline className="text-2xl" onClick={handleClose}/>
              </div>
              <hr/>
            </div>

            <div className="flex flex-col mt-[18%] h-[67%] ">
              <div className="flex flex-row gap-2 bg-slate-300 p-3 justify-center mx-6 rounded my-3">
                <CiDeliveryTruck className="text-2xl"/>
                <span>Free delivery from $150</span>
              </div>
              <div className="w-full overflow-auto">
                <div className="flex flex-col">
                  <div className="flex flex-row mx-6 gap-4">
                    <img src="/images/watch1.png" alt="image" className="w-[5em] h-[5em] rounded-md"></img>
                    <div className="flex flex-col w-full">
                      <span>Product Name</span>
                      <span className="font-medium">$204.68</span>
                      <div className="flex flex-row justify-between w-full mt-1.5">
                        <div className="flex flex-row border gap-3 px-2 py-1 rounded-md text-md">
                            <button>-</button>
                            <span className="px-2">1</span>
                            <button>+</button>
                        </div>
                        <div className="flex flex-row text-sm text-slate-500 gap-0.5 mr-1">
                          <BsTrash3 />
                          <span className="underline">Remove</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mx-6 my-2"/>
                <div className="flex flex-col ">
                  <div className="flex flex-row mx-6 gap-4">
                    <img src="/images/watch1.png" alt="image" className="w-[5em] h-[5em] rounded-md"></img>
                    <div className="flex flex-col w-full">
                      <span>Product Name</span>
                      <span className="font-medium">$140.00</span>
                      <div className="flex flex-row justify-between w-full mt-1.5">
                        <div className="flex flex-row border gap-3 px-2 py-1 rounded-md text-md">
                            <button>-</button>
                            <span className="px-2">1</span>
                            <button>+</button>
                        </div>
                        <div className="flex flex-row text-sm text-slate-500 gap-0.5 mr-1">
                          <BsTrash3 />
                          <span className="underline">Remove</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mx-6 my-2"/>
                <div className="flex flex-col ">
                  <div className="flex flex-row mx-6 gap-4">
                    <img src="/images/watch1.png" alt="image" className="w-[5em] h-[5em] rounded-md"></img>
                    <div className="flex flex-col w-full">
                      <span>Product Name</span>
                      <span className="font-medium">$13.82</span>
                      <div className="flex flex-row justify-between w-full mt-1.5">
                        <div className="flex flex-row border gap-3 px-2 py-1 rounded-md text-md">
                            <button>-</button>
                            <span className="px-2">1</span>
                            <button>+</button>
                        </div>
                        <div className="flex flex-row text-sm text-slate-500 gap-0.5 mr-1">
                          <BsTrash3 />
                          <span className="underline">Remove</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mx-6 my-2"/>
                <div className="flex flex-col ">
                  <div className="flex flex-row mx-6 gap-4">
                    <img src="/images/watch1.png" alt="image" className="w-[5em] h-[5em] rounded-md"></img>
                    <div className="flex flex-col w-full">
                      <span>Product Name</span>
                      <span className="font-medium">$13.82</span>
                      <div className="flex flex-row justify-between w-full mt-1.5">
                        <div className="flex flex-row border gap-3 px-2 py-1 rounded-md text-md">
                            <button>-</button>
                            <span className="px-2">1</span>
                            <button>+</button>
                        </div>
                        <div className="flex flex-row text-sm text-slate-500 gap-0.5 mr-1">
                          <BsTrash3 />
                          <span className="underline">Remove</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mx-6 my-2"/>
                <div className="flex flex-col ">
                    <div className="flex flex-row mx-6 gap-4">
                      <img src="/images/watch1.png" alt="image" className="w-[5em] h-[5em] rounded-md"></img>
                      <div className="flex flex-col w-full">
                        <span>Product Name</span>
                        <span className="font-medium">$13.82</span>
                        <div className="flex flex-row justify-between w-full mt-1.5">
                          <div className="flex flex-row border gap-3 px-2 py-1 rounded-md text-md">
                              <button>-</button>
                              <span className="px-2">1</span>
                              <button>+</button>
                          </div>
                          <div className="flex flex-row text-sm text-slate-500 gap-0.5 mr-1">
                            <BsTrash3 />
                            <span className="underline">Remove</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              
            <div className="fixed bottom-0 w-full">
              <hr/>
              <div className="flex flex-row w-[33%]">
                <div className="flex flex-row mt-2 justify-between w-full mx-6">
                  <span>Total</span>
                  <span>$386.14</span>
                </div>
              </div>
              <div className="flex flex-col w-[33%] gap-y-2 my-5">
                <button className="border p-3 rounded-md mx-6">
                  <span>Continue Shopping</span>
                </button>
                <button className="border bg-yellow-500 p-3 rounded-md mx-6">
                  <span>Go to checkout</span>
                </button>
              </div>
            </div>

          </div>
          
        </>
      </Modal>
    </div>
  );
}
