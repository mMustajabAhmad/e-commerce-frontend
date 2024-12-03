import Header from "./Header";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { fetchProducts } from "../../utils/Product_APIs";
import { useQuery } from "@tanstack/react-query";

function Shop() {
  const {
    data: products,
    error: productsError,
    isLoading: loadingProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });

  if (loadingProducts) return <div>Loading Products...</div>;
  if (productsError) return <div>Error</div>;
  return (
    <>
      <div className="wrapper">
        <Header />

        <main className="flex flex-col min-h-screen gap-y-10">
          <div className="h-20 flex justify-center bg-gray-200 ">
            <span className="font-medium text-3xl mt-4">HOME / SHOP</span>
          </div>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col w-1/3">
              <LeftPanel />
            </div>
            <div className="flex flex-col">
              <RightPanel data={products ? products : []} />
            </div>
          </div>
        </main>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}

export default Shop;
