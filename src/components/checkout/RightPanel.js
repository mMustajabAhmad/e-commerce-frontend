import Select from 'react-select';
import { IoIosLock } from "react-icons/io";
import { fetchOrderVouchers } from "../../utils/Voucher_APIs";
import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';

const RightPanel = (props) =>{
  const [showSaved, setShowSaved] = useState(false);
  const addresses = [
    {label: "abc", value: "1"},
    {label: "def", value: "2"},
    {label: "ghi", value: "3"},
    {label: "jkl", value: "4"},
  ];
  const bill = props.data
  const {
    data: applicableOrderVouchers, 
    error: voucherError, 
    isLoading: loadingVouchers
  } = useQuery({
    queryKey: ["orderVouchers"],
    queryFn: ()=> fetchOrderVouchers()
  });

  if(loadingVouchers) return <div>Loading Vouchers...</div>
  if(voucherError) return <div>Error in Loading Vouchers</div>

  const vouchers = [];
  for(let i=0; i<applicableOrderVouchers.length; i++){
    vouchers.push(
      {label: applicableOrderVouchers[i].voucher_code, value: applicableOrderVouchers[i].id}
    )
  }
  
  return(
    <>
      <div className="w-1/2 flex flex-col ml-8 px-10 pt-2 gap-10 bg-white shadow-2xl">
        <span className='text-2xl font-medium flex flex-row justify-center my-2'>Order Details</span>
        <div className="flex flex-col gap-y-1">
          <span className="font-medium">Apply Voucher</span>
          <Select options={vouchers} placeholder="Select Voucher"/>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div className='flex flex-col gap-y-2'>
            <div className='flex flex-row justify-between'>
              <span className='font-medium'>Shipping Details</span>
              {showSaved ?
                <button className='text-xs text-slate-600 underline' onClick={() => setShowSaved(false)}>Other Adresses</button>
                :
                <button className='text-xs text-slate-600 underline' onClick={() => setShowSaved(true)}>Show Saved</button>
              }
            </div>
            {showSaved ? 
              <>
                <Select options={addresses} placeholder="Billing Address"/>
                <Select options={addresses} placeholder="Shipping Address"/>
              </>
            :
              <>
                <input placeholder='Billing Address' className='border rounded-md p-1.5' type="text"/>
                <input placeholder='Shipping Address' className='border rounded-md p-1.5' type="text"/>
              </>
            }
            
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='font-medium'>Shipping Method</span>
          <div className='flex flex-row gap-2 text-sm border p-2 rounded-md'>
            <input type='radio' name='shippingMethod' value='COD' id='cod'/>
            <label htmlFor="cod">Cash on Delivery</label>
          </div>
          <div className='flex flex-row gap-2 text-sm border p-2 rounded-md'>
            <input type='radio' name='shippingMethod' value='COD' id='cod'/>
            <label htmlFor="cod">Stripe</label>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="font-medium">Pricing Details</span>
          <div className='flex flex-col'>
            <div className="flex flex-col bg-slate-200 gap-y-3 pt-2 pb-4 px-3 rounded-md">
              <div className="flex flex-row justify-between">
                <span>Subtotal</span>
                <span>${bill}</span>
              </div>
              <div className="flex flex-row justify-between">
                <span>Shipping Fee</span>
                <span>$9.99</span>
              </div>
              <div className="flex flex-row justify-between">
                <span>Tax(15%)</span>
                <span>$15.99</span>
              </div>
            </div>
            <button className="bg-blue-700 rounded-md">
              <span className="flex flex-row items-center justify-center text-white gap-1 py-2">
                <IoIosLock />
                Place Order
              </span>
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default RightPanel;