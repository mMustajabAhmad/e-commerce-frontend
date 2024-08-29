import Header from "../shop/Header";
import Footer from "../shop/Footer";
import CategoryRow from "./CategoriesRow";
import { getParentCategories } from "../../utils/CategoryUtils";
import {
  calculateNumberOfRows,
  calculateNumberOfColumns,
} from "../../utils/RowAndColUtils";
import { fetchCategories } from "../../utils/APIs/Category_APIs";
import { useQuery } from "@tanstack/react-query";

function Categories() {
  const {
    data: categories,
    error: categoriesError,
    isLoading: loadingCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });

  if (loadingCategories) return <div>Loading...</div>;
  if (categoriesError) return <div>Error...</div>;

  const parentCategories = getParentCategories(categories);
  const rows = [];

  const numberOfRows = calculateNumberOfRows(parentCategories);
  const indexesForSlicing = calculateNumberOfColumns(parentCategories);
  const start = indexesForSlicing["start"];
  const end = indexesForSlicing["end"];
  for (let i = 0; i < numberOfRows; i++) {
    rows.push(
      <>
        <CategoryRow
          data={
            parentCategories ? parentCategories.slice(start[i], end[i]) : []
          }
        />
      </>
    );
  }

  return (
    <div className="mt-3">
      <Header />
      <main className="flex flex-col min-h-screen">
        <div className="h-20 flex justify-center bg-gray-200 ">
          <span className="font-medium text-3xl mt-4">SHOP / CATEGORIES</span>
        </div>
        <div className="mt-6 mb-10">{rows}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Categories;
