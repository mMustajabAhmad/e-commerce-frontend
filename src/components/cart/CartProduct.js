import { getCurrentUserId } from "../../utils/JWT_TokenDecoder";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BsTrash3 } from "react-icons/bs";
import {
  addOneToCartProductQuantity,
  subtractOneFromCartProductQuantity,
  removeProductFromCart,
} from "../../utils/APIs/Cart_APIs";

function CartProduct(props) {
  const cartProduct = props.data;
  const user_id = getCurrentUserId();
  const queryClient = useQueryClient();
  const product_size = Object.keys(cartProduct)[0];

  const addOneToQuantity = useMutation({
    mutationFn: () => addOneToCartProductQuantity(product_size),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", user_id]);
    },
  });

  const subtractOneFromQuantity = useMutation({
    mutationFn: () => subtractOneFromCartProductQuantity(product_size),
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

  const imageURL =
    cartProduct[product_size]?.product_image
      ? `http://localhost:3001/${cartProduct[product_size].product_image}`
      : "/images/watch1.png";

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row mx-6 gap-4">
          <img
            src={imageURL}
            alt="image"
            className="w-[5em] h-[5em] rounded-md"
          ></img>
          <div className="flex flex-col w-full">
            <span>{cartProduct[product_size].product_name}</span>
            <span className="text-red-600">{cartProduct.size}</span>
            <span className="font-medium">
              ${cartProduct[product_size].price * cartProduct[product_size].quantity}
            </span>
            <div className="flex flex-row justify-between w-full mt-1.5">
              <div className="flex flex-row border gap-3 px-2 py-1 rounded-md text-md">
                <button onClick={() => subtractOneFromQuantity.mutate()}>
                  -
                </button>
                <span className="px-2">{cartProduct[product_size].quantity}</span>
                <button onClick={() => addOneToQuantity.mutate()}>+</button>
              </div>
              <div className="flex flex-row text-sm text-slate-500 gap-0.5 mr-1 items-center">
                <BsTrash3 />
                <span
                  className="underline"
                  onClick={() => removeProduct.mutate()}
                >
                  Remove
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
