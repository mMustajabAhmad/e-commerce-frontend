import { useQuery } from "@tanstack/react-query";
import { fetchProductSize, fetchProduct } from "../../utils/APIs/Product_APIs";
import { fetchProductVoucher, getVoucher } from "../../utils/APIs/Voucher_APIs";

const OrderItem = (props) => {
  const itemDetail = props.data;
  const {
    data: productSize,
    error: productSizeError,
    isLoading: loadingProductSize
  } = useQuery({
    queryKey: ["productSize", itemDetail.product_size_id],
    queryFn: ()=> fetchProductSize(itemDetail.product_size_id)
  })

  const productId = productSize ? productSize.product_id : null;

  const {
    data: product,
    error: productError,
    isLoading: productIsLoading
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
    enabled: !!productId
  })

  const {
    data: productVoucher,
    error: productVoucherError,
    isLoading: loadingProductVoucher
  } = useQuery({
    queryKey: ["productVoucher", itemDetail.id],
    queryFn: () =>fetchProductVoucher(itemDetail.id)
  })

  const {
    data: voucher,
    error: voucherError,
    isLoading: voucherIsLoading
  } = useQuery({
    queryKey: ["voucher", productVoucher?.id],
    queryFn: ()=>getVoucher(productVoucher?.id),
    enabled: !!productVoucher
  })

  if(loadingProductSize) return <div>Loading...</div>
  if (productSizeError) return <div>Error</div>

  if(productIsLoading) return <div>Loading..</div>
  if(productError) return <div>Error</div>

  if (loadingProductVoucher) return <div>Loading...</div>
  if (productVoucherError) return <div>Error</div>

  if(voucherIsLoading) return <div>Loading...</div>
  if(voucherError) return <div>Error</div>

  return (
    <>
      <div className="flex flex-row gap-5 my-2">
        <div className="flex flex-col ml-6 ">
          <img src={`http://localhost:3001/${product.product_images[0].url}`} alt='image' className="h-28 w-28 rounded"/>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-medium">{product.title}</span>
          <span className="text-sm">$ {itemDetail.price}</span>
          <span className="text-sm">Size : <span className="text-red-700">{itemDetail.size}</span></span>
          <span className="text-sm">Quantity: {itemDetail.quantity}</span>
          {productVoucher &&
            <span className="bg-gray-300 flex flex-row justify-center text-sm rounded">{voucher.voucher_code}</span>
          }
        </div>
      </div>
    </>
  );
};

export default OrderItem;
