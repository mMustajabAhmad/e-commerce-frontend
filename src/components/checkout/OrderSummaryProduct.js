import { getCurrentUserId } from "../../utils/JWT_TokenDecoder";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchProductVouchers,
  applyProductVoucher,
  getVoucher,
  removeProductVoucher,
} from "../../utils/APIs/Voucher_APIs";
import {
  addOneToCartProductQuantity,
  subtractOneFromCartProductQuantity,
  removeProductFromCart,
} from "../../utils/APIs/Cart_APIs";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderSummaryProduct = (props) => {
  const orderSummaryProduct = props.cartProduct;
  console.log("Order Summary Product", orderSummaryProduct)
  const product_size = Object.keys(orderSummaryProduct)[0];
  const product = orderSummaryProduct[product_size]
  const user_id = getCurrentUserId();
  const queryClient = useQueryClient();
  const [voucherCode, setVoucherCode] = useState("");

  console.log("product size lp", product)

  const handlevoucherCodeChange = (event) => {
    setVoucherCode(event.target.value);
  };

  const {
    data: productVouchers,
    error: voucherError,
    isLoading: loadingProductVouchers,
  } = useQuery({
    queryKey: ["productVouchers"],
    queryFn: fetchProductVouchers,
  });

  const {
    data: appliedVoucher,
    error: appliedVoucherError,
    isLoading: appliedVoucherIsLoading,
  } = useQuery({
    queryKey: ["appliedVoucher", product.voucher_code],
    queryFn: () => getVoucher(product.voucher_code),
  });

  const addOneToQuantity = useMutation({
    mutationFn: () => addOneToCartProductQuantity(product_size),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", user_id]);
    },
  });

  const subtractOneFromQuantity = useMutation({
    mutationFn: () =>
      subtractOneFromCartProductQuantity(product_size),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", user_id]);
    },
  });

  const removeProduct = useMutation({
    mutationFn: () => removeProductFromCart(product_size),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", user_id]);
    },
  });

  const applyVoucher = useMutation({
    mutationFn: () => applyProductVoucher(product_size, voucher.voucher_code),
    onSuccess: () => {
      queryClient.invalidateQueries(["productVouchers", user_id]);
    },
  });

  const removeVoucher = useMutation({
    mutationFn: () =>
      removeProductVoucher(
        product_size,
        product.voucher_code
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["productVouchers", user_id]);
      setVoucherCode("");
    },
  });

  if (loadingProductVouchers) return <div>Loading Product Vouchers...</div>;
  if (voucherError) return <div>Error in Loading Vouchers</div>;

  if (appliedVoucherIsLoading) return <div>Applied voucher is Loading...</div>;
  if (appliedVoucherError) return <div>Error in Loading Applied Voucher</div>;

  const imageURL = `http://localhost:3001${product.product_image}`;
  const isVoucherValid = productVouchers?.some(
    (voucher) => voucher.voucher_code == voucherCode
  );
  var voucher = null;
  if (isVoucherValid) {
    voucher = productVouchers?.find(
      (voucher) => voucher.voucher_code == voucherCode
    );
  }

  return (
    <>
      <div className="flex flex-row justify-between mx-4 my-4">
        <div className="flex flex-row gap-4">
          <img src={imageURL} className="h-[6.5em] w-[8em] rounded"></img>
          <div className="flex flex-col gap-y-1">
            <span>{product.product_name}</span>
            <span className="text-sm">{product.size}</span>
            <button
              className="text-xs text-gray-500 flex justify-start"
              onClick={() => removeProduct.mutate()}
            >
              Remove
            </button>
            {!isVoucherValid &&
              voucherCode != "" &&
              !product.voucher_code && (
                <span className="text-xs text-red-500">
                  Invalid Voucher Code!
                </span>
              )}
            {product.voucher_code ? (
              <>
                <div className="flex flex-row gap-2 bg-slate-200 items-center p-1 rounded">
                  <span className="text-xs">{appliedVoucher.voucher_code}</span>
                  <button
                    className="text-sm text-red-500 font-medium"
                    onClick={() => removeVoucher.mutate()}
                  >
                    <IoCloseOutline />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-row gap-2">
                  <input
                    type="text"
                    placeholder="voucher code"
                    className="border rounded pl-1 h-6 text-sm"
                    value={voucherCode}
                    onChange={handlevoucherCodeChange}
                  />
                  <button
                    className="text-xs text-gray-500 underline"
                    onClick={() => applyVoucher.mutate()}
                  >
                    Apply
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-y-10 justify-center items-center">
          <span>
            ${product.price * product.quantity}
          </span>
          <div className="flex flex-row justify-between items-center">
            <span
              className="bg-slate-200 rounded h-7 w-7 flex justify-center"
              onClick={() => subtractOneFromQuantity.mutate()}
            >
              -
            </span>
            <span className="mx-2">{product.quantity}</span>
            <span
              className="bg-slate-200 rounded h-7 w-7 flex justify-center"
              onClick={() => addOneToQuantity.mutate()}
            >
              +
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummaryProduct;
