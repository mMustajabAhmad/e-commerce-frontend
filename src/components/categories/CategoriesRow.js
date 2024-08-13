import CategoryCard from "./CategoryCard";

function CategoryRow(){
    return(
        <>
        <div className="flex flex-row mt-6" style={{marginLeft: "10%"}}>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
        </>
    );
}
export default CategoryRow;