import { getCurrentUserId } from "../../utils/JWT_TokenDecoder";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BsTrash3 } from "react-icons/bs";
import {
  fetchProductSizes,
  fetchProduct,
  fetchSize,
  addOneToCartProductQuantity,
  subtractOneFromCartProductQuantity,
  removeProductFromCart,
} from "../../utils/Cart_APIs";

function CartProduct(props) {
  const cartProduct = props.data;
  const user_id = getCurrentUserId();
  const queryClient = useQueryClient();

  const {
    data: productSize,
    error: productSizeError,
    isLoading: productSizeLoading,
  } = useQuery({
    queryKey: ["productSize", cartProduct.product_size_id],
    queryFn: () => fetchProductSizes(cartProduct.product_size_id),
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

  const addOneToQuantity = useMutation({
    mutationFn: () => addOneToCartProductQuantity(cartProduct.id),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", user_id]);
    },
  });

  const subtractOneFromQuantity = useMutation({
    mutationFn: () => subtractOneFromCartProductQuantity(cartProduct.id),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", user_id]);
    },
  });

  const removeProduct = useMutation({
    mutationFn: () => removeProductFromCart(cartProduct.id),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", user_id]);
    },
  });

  if (productSizeLoading) return <div>Loading product size...</div>;
  if (productSizeError) return <div>Error loading product size!</div>;

  if (productIsLoading) return <div>Loading product...</div>;
  if (productError) return <div>Error loading product!</div>;

  if (sizeIsLoading) return <div>Loading size...</div>;
  if (sizeError) return <div>Error loading size!</div>;

  const imageURL =
    product?.product_images.length > 0
      ? `http://localhost:3001/${product.product_images[0].url}`
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
            <span>{product.title}</span>
            <span className="text-red-600">{size.name}</span>
            <span className="font-medium">
              ${cartProduct.price * cartProduct.quantity}
            </span>
            <div className="flex flex-row justify-between w-full mt-1.5">
              <div className="flex flex-row border gap-3 px-2 py-1 rounded-md text-md">
                <button onClick={() => subtractOneFromQuantity.mutate()}>
                  -
                </button>
                <span className="px-2">{cartProduct.quantity}</span>
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
