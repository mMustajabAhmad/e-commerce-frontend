import CategoryCard from "./CategoryCard";

function CategoryRow(props) {
  const categories = props.data;
  console.log("I'm category inside rows page: ", categories);
  const categoryCards = [];
  for (let i = 0; i < categories.length; i++) {
    categoryCards.push(<CategoryCard data={props.data[i]} />);
  }
  return (
    <>
      <div className="flex flex-row mt-6 ml-[10%]">
        {categoryCards}
      </div>
    </>
  );
}
export default CategoryRow;
