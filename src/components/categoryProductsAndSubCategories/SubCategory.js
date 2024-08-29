import { Link } from "react-router-dom";
function SubCategory(props) {
  const subCategory = props.data;
  const imageURL =
    subCategory && subCategory.category_image_url
      ? `http://localhost:3001/${subCategory.category_image_url}`
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
        className="ml-6 rounded"
      >
        <a href={`/categoryProducts/${subCategory.id}`}>
          <span
            className="flex justify-center text-white font-medium text-3xl hover:text-purple-700 hover:text-3xl"
            style={{ marginTop: "40%" }}
          >
            {subCategory.name}
          </span>
        </a>
      </div>
    </>
  );
}

export default SubCategory;
