import { getCurrentUserId } from "../../utils/JWT_TokenDecoder";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
   fetchProductVouchers,
   applyProductVoucher,
   getVoucher,
   removeProductVoucher,
} from "../../utils/Voucher_APIs";
import { 
  fetchProductSizes,
  fetchProduct, 
  fetchSize, 
  addOneToCartProductQuantity,
  subtractOneFromCartProductQuantity,
  removeProductFromCart
} from "../../utils/Cart_APIs";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderSummaryProduct = (props) => {
  const orderSummaryProduct = props.cartProduct;
  const user_id = getCurrentUserId();
  const queryClient = useQueryClient();
  const [voucherCode, setVoucherCode] = useState('');
  
  const handlevoucherCodeChange = (event) =>{
    setVoucherCode(event.target.value);
  }

  const {
    data: productVouchers,
    error: voucherError,
    isLoading: loadingProductVouchers
  } = useQuery({
    queryKey: ['productVouchers'],
    queryFn: fetchProductVouchers
  })

  const {
    data: productSize,
    error: productSizeError,
    isLoading: productSizeLoading,
  } = useQuery({
    queryKey: ["productSize", orderSummaryProduct.product_size_id],
    queryFn: () => fetchProductSizes(orderSummaryProduct.product_size_id),
  });

  const {
    data: product,
    error: productError,
    isLoading: productIsLoading,
  } = useQuery({
    queryKey: ["product", productSize?.product_id],
    queryFn: () => fetchProduct(productSize?.product_id),
    enabled: !!productSize?.product_id,
  });

  const {
    data: size,
    error: sizeError,
    isLoading: sizeIsLoading,
  } = useQuery({
    queryKey: ["size", productSize?.size_id],
    queryFn: () => fetchSize(productSize?.size_id),
    enabled: !!productSize?.size_id,
  });

  const {
    data: appliedVoucher,
    error: appliedVoucherError,
    isLoading: appliedVoucherIsLoading
  } = useQuery({
    queryKey: ["appliedVoucher", orderSummaryProduct.voucher_id],
    queryFn: () => getVoucher(orderSummaryProduct.voucher_id)
  });

  const addOneToQuantity = useMutation({
    mutationFn: ()=> addOneToCartProductQuantity(orderSummaryProduct.id),
    onSuccess: ()=>{
      queryClient.invalidateQueries(['cart', user_id]);
    }
  })

  const subtractOneFromQuantity = useMutation({
    mutationFn: ()=>subtractOneFromCartProductQuantity(orderSummaryProduct.id),
    onSuccess: ()=>{
      queryClient.invalidateQueries(['cart', user_id]);
    }
  })

  const removeProduct = useMutation({
    mutationFn: ()=> removeProductFromCart(orderSummaryProduct.id),
    onSuccess: ()=>{
      queryClient.invalidateQueries(['cart', user_id]);
    }
  })

  const applyVoucher = useMutation({
    mutationFn: ()=> applyProductVoucher(orderSummaryProduct.id, voucher.id),
    onSuccess: ()=>{
      queryClient.invalidateQueries(['productVouchers', user_id]);
      queryClient.invalidateQueries(['productVouchers', user_id]);
    }
  })

  const removeVoucher = useMutation({
    mutationFn: ()=> removeProductVoucher(orderSummaryProduct.id, orderSummaryProduct.voucher_id),
    onSuccess: ()=>{
      queryClient.invalidateQueries(['productVouchers', user_id]);
      queryClient.invalidateQueries(['productVouchers', user_id]);
      setVoucherCode('');
    }
  })


  if (productSizeLoading) return <div>Loading product size...</div>;
  if (productSizeError) return <div>Error loading product size!</div>;

  if (productIsLoading) return <div>Loading product...</div>;
  if (productError) return <div>Error loading product!</div>;

  if (sizeIsLoading) return <div>Loading size...</div>;
  if (sizeError) return <div>Error loading size!</div>;

  if(loadingProductVouchers) return <div>Loading Product Vouchers...</div>;
  if(voucherError) return <div>Error in Loading Vouchers</div>;

  if(appliedVoucherIsLoading) return <div>Applied voucher is Loading...</div>
  if(appliedVoucherError) return <div>Error in Loading Applied Voucher</div>

  const imageURL = product?.product_images.length > 0 ? `http://localhost:3001/${product.product_images[0].url}` : "/images/watch1.png";
  const isVoucherValid = productVouchers?.some(voucher => voucher.voucher_code == voucherCode);
  var voucher = null
  if(isVoucherValid){
    voucher = productVouchers?.find(voucher => voucher.voucher_code == voucherCode);
  }

  return(
    <>
      <div className="flex flex-row justify-between mx-4 my-4">
          <div className="flex flex-row gap-4">
          <img src={imageURL} className="h-[6.5em] w-[8em] rounded"></img>
          <div className="flex flex-col gap-y-1">
              <span>{product.title}</span>
              <span className="text-sm">{size.name}</span>
              <button className="text-xs text-gray-500 flex justify-start" onClick={() => removeProduct.mutate()} >Remove</button>
              {!isVoucherValid && voucherCode != '' && !orderSummaryProduct.voucher_id &&
                <span className="text-xs text-red-500">Invalid Voucher Code!</span>
              }
              {orderSummaryProduct.voucher_id ?
                <>
                  <div className="flex flex-row gap-2 bg-slate-200 items-center p-1 rounded">
                    <span className="text-xs" >{appliedVoucher.voucher_code}</span>
                    <button className="text-sm text-red-500 font-medium" onClick={() => removeVoucher.mutate()}><IoCloseOutline/></button>
                  </div>
                </>
                :
                <>
                  <div className="flex flex-row gap-2">
                    <input type="text" placeholder="voucher code" className="border rounded pl-1 h-6 text-sm" value={voucherCode} onChange={handlevoucherCodeChange}/>
                    <button className="text-xs text-gray-500 underline" onClick={() => applyVoucher.mutate()}>Apply</button>
                  </div>
                </>
              }
          </div>
          
          </div>
          <div className="flex flex-col gap-y-10 justify-center items-center">
            <span>${orderSummaryProduct.price * orderSummaryProduct.quantity}</span>
            <div className="flex flex-row justify-between items-center">
                <span className="bg-slate-200 rounded h-7 w-7 flex justify-center" onClick={() => subtractOneFromQuantity.mutate()}>-</span>
                <span className="mx-2">{orderSummaryProduct.quantity}</span>
                <span className="bg-slate-200 rounded h-7 w-7 flex justify-center" onClick={() => addOneToQuantity.mutate()}>+</span>
            </div>
          </div>
      </div>
    </>
  );
}

export default OrderSummaryProduct;