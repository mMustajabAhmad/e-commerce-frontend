import { Link } from "react-router-dom";

function CategoryCard(props) {
  const category = props.data;
  const imageURL =
    category && category.category_image_url
      ? `http://localhost:3001/${category.category_image_url}`
      : "/images/watch1.png";
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageURL})`,
          width: "350px",
          height: "350px",
          backgroundSize: "cover",
        }}
        className="ml-6 rounded-lg"
      >
        <Link to={`/categoryProducts/${category.id}`}>
          <span
            className="flex justify-center text-white font-medium text-3xl hover:text-purple-700 hover:text-3xl"
            style={{ marginTop: "40%" }}
          >
            {category.name}
          </span>
        </Link>
      </div>
    </>
  );
}

export default CategoryCard;
