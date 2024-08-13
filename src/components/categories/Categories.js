import Header from "../shop/Header";
import Footer from "../shop/Footer";
import CategoryRow from "./CategoriesRow";

function Categories(){

    return(
        <div className="mt-3">
            <Header />
            <main className="flex flex-col min-h-screen">
                <div className="h-20 flex justify-center bg-gray-200 ">
                    <span className="font-bold text-3xl mt-4">SHOP / CATEGORIES</span>
                </div>
                <div className="mt-6 mb-10">
                    <CategoryRow />
                    <CategoryRow />
                </div>
            </main>
            <Footer />
        </div>
    );

}

export default Categories;