import Select from 'react-select';
import { IoIosLock } from "react-icons/io";
import { fetchOrderVouchers } from "../../utils/Voucher_APIs";
import { useQuery } from "@tanstack/react-query";

const RightPanel = (props) =>{
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
      <div className="w-1/3 flex flex-col my-4 ml-8 mr-12 gap-y-6">
        <div className="flex flex-col">
          <span className="font-medium text-lg my-2">Apply Voucher</span>
          <Select options={vouchers} />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-lg my-2">Pricing Details</span>
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
    </>
  );
}

export default RightPanel;