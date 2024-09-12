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
        className="relative ml-6 rounded"
      >
        <img src={`${imageURL}`} className="w-[350px] h-[350px] object-cover rounded"></img>
        <a href={`/categoryProducts/${subCategory.id}`}>
          <span
            className="absolute text-white font-medium text-3xl hover:text-purple-700 hover:text-3xl mt-[40%] translate-x-36 -translate-y-[11.3em]"
          >
            {subCategory.name}
          </span>
        </a>
      </div>
    </>
  );
}

export default SubCategory;
