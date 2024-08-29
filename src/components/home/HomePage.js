import Header from "./Header";
import Footer from "./Footer";
import EmailSubscription from "./EmailSubsription";
import ProductGridRow from "./ProductGridRow";
import { Link } from "react-router-dom";
import { makeListOfEightProducts } from "../../utils/HomeProductsUtils";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../utils/APIs/Product_APIs";

function HomePage() {
  const {
    data: fetchedproducts,
    error,
    isLoading,
  } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

  let productList1 = [];
  let productList2 = [];

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  const products = makeListOfEightProducts(fetchedproducts);
  if (products) {
    productList1 = products.slice(0, 4);
    productList2 = products.slice(4, 8);
  }

  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="flex flex-col min-h-screen">
          <div
            style={{
              backgroundImage: "url('/images/watch.avif')",
              height: "590px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "0.93",
            }}
            class="grid place-items-center"
          >
            <div>
              <span class="text-white font-bold text-3xl flex justify-center">
                Home
              </span>
              <br></br>
              <span class="text-white font-bold text-6xl flex justify-center">
                New Arrivals
              </span>
              <br></br>
              <span class="text-white text-2xl flex justify-center">
                Shop your favorite products
              </span>
              <br></br>
              <button
                type="submit"
                className="bg-white pl-10 pr-10 pt-4 pb-4 ml-20 mt-2 hover:bg-purple-700 hover:text-white rounded"
              >
                <Link to="/shop">Shop Now</Link>
              </button>
            </div>
          </div>
          <div className="mb-12 mt-16 ">
            {products && (
              <div className="flex flex-col gap-y-4">
                <ProductGridRow data={productList1} />
                <ProductGridRow data={productList2} />
              </div>
            )}
          </div>
          <EmailSubscription />
        </main>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}

export default HomePage;
