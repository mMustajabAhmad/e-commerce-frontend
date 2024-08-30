import { Link } from "react-router-dom";

function CategoryCard(props) {
  const category = props.data;
  const imageURL =
    category && category.category_image_url
      ? `http://localhost:3001/${category.category_image_url}`
      : "/images/watch1.png";
  return (
    <>
      <div className={"ml-6 "}>
        <img src={`${imageURL}`} className="w-[350px] h-[350px] object-cover rounded-lg"></img>
        <Link to={`/categoryProducts/${category.id}`} className="absolute translate-x-28 -translate-y-60">
          <span
            className="flex justify-center text-white font-medium text-3xl hover:text-purple-700 hover:text-3xl mt-[40%]"
          >
            {category.name}
          </span>
        </Link>
      </div>
    </>
  );
}

export default CategoryCard;
