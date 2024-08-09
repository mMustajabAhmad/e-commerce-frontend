import Header from "../shop/Header";
import Footer from "../shop/Footer";

function Product(){
    return(
        <>
            <div className="wrapper mt-3">
                <Header />
                <main className="flex flex-col min-h-screen">
                    <div className="h-20 flex justify-center bg-gray-200">
                        <span className="font-bold text-2xl mt-4">HOME / SHOP / PRODUCT</span>
                    </div>

                    <div className="flex flex-row" style={{marginLeft: "10%", marginRight: "10%", marginTop: "8%"}}>
                        <div className="flex flex-col">
                            <div className="rounded" style={{backgroundImage: "url('/images/watch1.png')", width: "470px", height: "550px", backgroundSize: "cover"}}></div>
                        </div>
                        <div className="flex flex-col" style={{marginLeft: "10%"}}>
                            <p className="text-3xl font-bold mt-6">Lorem Ipsum Product</p>
                            <p className="text-2xl fornt-bold text-rose-600 mt-2">$ 500</p>
                            <p className="flex justify-center mt-10 " style={{marginRight: "4px"}}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                            <hr className="mt-4 ml-2 mr-6"></hr>
                            <p className="mt-4 font-bold text-2xl">Sizes</p>
                            <div className="flex flex-row mt-2">
                                <button className="bg-purple-700 text-white border" type="button" style={{width: "40px", height: "40px"}}>XS</button>
                                <button className= "bg-purple-700 text-white border ml-2"type="button" style={{width: "40px", height: "40px"}}>S</button>
                                <button className="bg-purple-700 text-white border ml-2" type="button" style={{width: "40px", height: "40px"}}>M</button>
                                <button className="bg-purple-700 text-white border ml-2" type="button" style={{width: "40px", height: "40px"}}>L</button>
                                <button className="bg-purple-700 text-white border ml-2" type="button" style={{width: "40px", height: "40px"}}>XL</button>
                            </div>
                            <button className="border bg-black text-white mt-6 hover:bg-purple-700" style={{height: "50px", width: "200px"}}>Add To Cart</button>
                        </div>
                    </div>
                    
                </main>
                <Footer className="mt-auto"/>
            </div>
        </>
    );
}

export default Product;