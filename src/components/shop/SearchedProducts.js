import Header from "./Header";
import Footer from "./Footer";
import { fetchSearchedProducts } from "../../utils/Product_APIs";
import { useQuery } from "@tanstack/react-query";
import RightPanel from "./RightPanel";
import { useParams } from "react-router-dom";

function SearchedProducts() {
  const { query } = useParams();

  const {
    data: products,
    error: productsError,
    isLoading: loadingProducts,
  } = useQuery({
    queryKey: ["searched products"],
    queryFn: () => fetchSearchedProducts(query),
  });

  if (loadingProducts) return <div>Loading Products...</div>;
  if (productsError) return <div>Error</div>;
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="h-20 flex justify-center bg-gray-200 ">
          <span className="font-medium text-3xl mt-4">SEARCH RESULTS</span>
        </div>
        <div className="flex flex-row justify-center">
          <RightPanel data={products ? products : []}/>
        </div>
      </main>
      <Footer className="mt-auto" />
    </>
  );
}
export default SearchedProducts;
