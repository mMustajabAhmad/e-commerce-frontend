import { Link } from "react-router-dom";

function CategoryProduct(props) {
  const product = props.data;
  const imageURL =
    product && product.product_images.length > 0
      ? `http://localhost:3001/${product.product_images[0].url}`
      : "/images/watch1.png";

  return (
    <>
      <div>
        <img src={`${imageURL}`} className="w-[290px] h-[320px] object-cover ml-4 rounded-lg"></img>
        <Link to={`/products/${product.id}`}>
          <p className="flex justify-center mt-2 font-medium hover:text-purple-700">
            {product.title}
          </p>
        </Link>
      </div>
    </>
  );
}

export default CategoryProduct;
