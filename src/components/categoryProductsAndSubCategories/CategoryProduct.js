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
        <div
          style={{
            backgroundImage: `url(${imageURL})`,
            width: "290px",
            height: "320px",
            backgroundSize: "cover",
          }}
          className="ml-4"
        ></div>
        <Link to={`/products/${product.id}`}>
          <p className="flex justify-center mt-2 font-bold hover:text-purple-700">
            {product.title}
          </p>
        </Link>
      </div>
    </>
  );
}

export default CategoryProduct;
