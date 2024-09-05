import Select from "react-select";
import { IoIosLock } from "react-icons/io";
import { fetchOrderVouchers } from "../../utils/APIs/Voucher_APIs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { fetchAddresses } from "../../utils/APIs/Address_APIs";
import { postOrderData } from "../../utils/APIs/Order_APIs";
import { getCurrentUserId } from "../../utils/JWT_TokenDecoder";
import { useNavigate } from 'react-router-dom';

const RightPanel = (props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const user_id = getCurrentUserId();
  const [showSaved, setShowSaved] = useState(false);
  const [voucher, setVoucher] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [shippingMethod, setShippingMethod] = useState("")

  const {
    data: fetchedAddresses,
    error: AddressError,
    isLoading: loadingAddress
  } = useQuery({
    queryKey: ["addresses"],
    queryFn: ()=> fetchAddresses(),
  })

  const bill = props.data;
  const {
    data: applicableOrderVouchers,
    error: voucherError,
    isLoading: loadingVouchers,
  } = useQuery({
    queryKey: ["orderVouchers"],
    queryFn: () => fetchOrderVouchers(),
  });

  const placeOrder = useMutation({
    mutationFn: () => postOrderData(billingAddress.label, shippingAddress.label, voucher ? voucher.label : null, shippingMethod),
    onSuccess: (response) => {
      queryClient.invalidateQueries(["cart", user_id])
      if(shippingMethod == "stripe"){
        navigate(`/payNow/${response.data.order.id}`)
      }else{
        navigate(`/orderHistory`)
      }
    },
    onError: (error) => {
      console.error('Error placing order:', error);
    },
  })

  if (loadingVouchers) return <div>Loading Vouchers...</div>
  if (voucherError) return <div>Error in Loading Vouchers</div>

  if (loadingAddress) return <div>Addresses are Loading...</div>
  if (AddressError) return <div>Error in Loading Addresses</div>

  const addresses = []
  for(let i=0; i<fetchedAddresses.length; i++){
    addresses.push({label: fetchedAddresses[i].address, value: fetchedAddresses[i].id});
  }

  const vouchers = [];
  vouchers.push({label: "None", value: "null"})
  for (let i = 0; i < applicableOrderVouchers.length; i++) {
    vouchers.push({
      label: applicableOrderVouchers[i].voucher_code,
      value: applicableOrderVouchers[i].id,
    });
    
  }

  console.log("shipping method", shippingMethod)


  const handleVoucherChange = (event) => {
    setVoucher(event);
  }

  const handleBillingAddressChangeForSelect = (event) =>{
    setBillingAddress(event);
  }

  const handleShippingAddressChangeForSelect = (event) =>{
    setShippingAddress(event);
  }

  const handleBillingAddressChangeForInput = (event) =>{
    setBillingAddress(event.target.value);
  }

  const handleShippingAddressChangeForInput = (event) =>{
    setShippingAddress(event.target.value);
  }

  const handleShippingMethodChange = (event) => {
    console.log("Shipping method before", event.target.value)
    setShippingMethod(event.target.value);
    console.log("Shipping method after", shippingMethod)
  }

  return (
    <>
      <div className="w-1/2 flex flex-col ml-8 px-10 pt-2 gap-10 bg-white shadow-2xl">
        <span className="text-2xl font-medium flex flex-row justify-center my-2">
          Order Details
        </span>
        <div className="flex flex-col gap-y-1">
          <span className="font-medium">Apply Voucher</span>
          <Select 
            options={vouchers} 
            placeholder="Select Voucher" 
            value={voucher} 
            onChange={handleVoucherChange}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row justify-between">
              <span className="font-medium">Shipping Details</span>
              {showSaved ? (
                <button
                  className="text-xs text-slate-600 underline"
                  onClick={() => {setShowSaved(false);setBillingAddress(null); setShippingAddress(null);}}
                >
                  Other Adresses
                </button>
              ) : (
                <button
                  className="text-xs text-slate-600 underline"
                  onClick={() => setShowSaved(true)}
                >
                  Show Saved
                </button>
              )}
            </div>
            {showSaved ? (
              <>
                <Select 
                  options={addresses} 
                  placeholder="Billing Address"
                  value={billingAddress}
                  onChange={handleBillingAddressChangeForSelect}
                />
                <Select
                  options={addresses} 
                  placeholder="Shipping Address"
                  value={shippingAddress}
                  onChange={handleShippingAddressChangeForSelect}
                />
              </>
            ) : (
              <>
                <input
                  placeholder="Billing Address"
                  className="border rounded-md p-1.5"
                  type="text"
                  value={billingAddress}
                  onChange={handleBillingAddressChangeForInput}
                />
                <input
                  placeholder="Shipping Address"
                  className="border rounded-md p-1.5"
                  type="text"
                  value={shippingAddress}
                  onChange={handleShippingAddressChangeForInput}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium">Shipping Method</span>
          <div className="flex flex-row gap-2 text-sm border p-2 rounded-md">
            <input type="radio" name="shippingMethod" value="COD" id="cod" checked onClick={handleShippingMethodChange}/>
            <label htmlFor="cod">Cash on Delivery</label>
          </div>
          <div className="flex flex-row gap-2 text-sm border p-2 rounded-md">
            <input type="radio" name="shippingMethod" value="stripe" id="cod" onClick={handleShippingMethodChange}/>
            <label htmlFor="cod">Stripe</label>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="font-medium">Pricing Details</span>
          <div className="flex flex-col">
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
            <button className="bg-blue-700 rounded-md" onClick={()=> placeOrder.mutate()}>
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
};

export default RightPanel;
