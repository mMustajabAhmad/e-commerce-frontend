import Header from "./Header";
import Footer from "./Footer";

function Shop(){
    return (
        <>
            <div className="wrapper mt-3">
                <Header />
                <main className="flex flex-col min-h-screen">
                    <div className="h-20 flex justify-center bg-gray-200">
                        <span className="font-bold text-3xl mt-4">HOME / SHOP</span>
                    </div>
                </main>
                <Footer className="mt-auto"/>
            </div>
        </>
    );
}

export default Shop;