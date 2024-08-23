import Header from "../shop/Header";
import Footer from "../shop/Footer";
import CategoryRow from "./CategoriesRow";
import { getParentCategories } from "../../utils/CategoryUtils";
import { useState, useEffect } from "react";
import apiClient from "../../api/authApi";
import {
  calculateNumberOfRows,
  calculateNumberOfColumns,
} from "../../utils/RowAndColUtils";

function Categories() {
  const [categories, setCategories] = useState(null);
  const [parentCategories, setParentCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get("/categories");
        setCategories(response.data);
        setParentCategories(getParentCategories(response.data));
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchCategories();
  }, []);

  const rows = [];
  if (categories) {
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
  }

  return (
    <div className="mt-3">
      <Header />
      <main className="flex flex-col min-h-screen">
        <div className="h-20 flex justify-center bg-gray-200 ">
          <span className="font-bold text-3xl mt-4">SHOP / CATEGORIES</span>
        </div>
        <div className="mt-6 mb-10">{rows}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Categories;
