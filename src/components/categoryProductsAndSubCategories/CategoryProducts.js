import Header from "../shop/Header";
import Footer from "../shop/Footer";
import { Link } from "react-router-dom";

function CategoryProducts(){
    return(
        <>
            <div className="mt-3">
                <Header />
                <main className="flex flex-col min-h-screen">
                    <div className="h-20 flex justify-center bg-gray-200 ">
                        <span className="font-bold text-2xl mt-4">CATEGORY / NAME</span>
                    </div>
                    <div className="flex flex-col mt-6">
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col">
                                <p className="text-4xl font-bold flex flex-row justify-center">Products</p>
                                <div className="flex flex-row mt-6">
                                    <div style={{marginTop: "10%"}}>
                                        <i className="fa fa-angle-double-left text-2xl hover:text-purple-700" ></i>
                                    </div>
                                    <div>
                                        <div style={{backgroundImage: `url(/images/watch1.png)`, width: "290px", height: "320px", backgroundSize: "cover"}} className="ml-4"></div>
                                        <p className="flex justify-center mt-2 font-bold hover:text-purple-700">Product Name</p>
                                    </div>
                                    <div>
                                        <div style={{backgroundImage: `url(/images/watch1.png)`, width: "290px", height: "320px", backgroundSize: "cover"}} className="ml-4"></div>
                                        <p className="flex justify-center mt-2 font-bold hover:text-purple-700">Product Name</p>
                                    </div>
                                    <div>
                                        <div style={{backgroundImage: `url(/images/watch1.png)`, width: "290px", height: "320px", backgroundSize: "cover"}} className="ml-4"></div>
                                        <p className="flex justify-center mt-2 font-bold hover:text-purple-700">Product Name</p>
                                    </div>
                                    <div>
                                        <div style={{backgroundImage: `url(/images/watch1.png)`, width: "290px", height: "320px", backgroundSize: "cover"}} className="ml-4"></div>
                                        <p className="flex justify-center mt-2 font-bold hover:text-purple-700">Product Name</p>
                                    </div>
                                    <div className="ml-4" style={{marginTop: "10%"}}>
                                        <i className="fa fa-angle-double-right text-2xl hover:text-purple-700"></i>
                                    </div>
                                </div>
                                
                                {/* <p className="flex flex-row justify-center mt-8 hover:text-purple-700">
                                    View More
                                    <i className="fa fa-angle-down ml-2 mt-1"></i>
                                </p> */}
                            </div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col mt-12">
                                <p className="text-4xl font-bold flex flex-row justify-center">Sub Categories</p>
                                <div className="flex flex-row mt-6 mb-10">
                                <div style={{marginTop: "13%"}}>
                                        <i className="fa fa-angle-double-left text-2xl hover:text-purple-700" ></i>
                                    </div>
                                    <div style={{backgroundImage: `url(/images/watch1.png)`, width: "350px", height: "350px", backgroundSize: "cover"}} className="ml-6">
                                        <Link to="/categoryProducts">
                                            <span className="flex justify-center text-white font-bold text-2xl hover:text-purple-700 hover:text-3xl" style={{marginTop: "40%"}}>
                                                Category Name
                                            </span>
                                        </Link>
                                    </div>
                                    <div style={{backgroundImage: `url(/images/watch1.png)`, width: "350px", height: "350px", backgroundSize: "cover"}} className="ml-6">
                                        <Link to="/categoryProducts">
                                            <span className="flex justify-center text-white font-bold text-2xl hover:text-purple-700 hover:text-3xl" style={{marginTop: "40%"}}>
                                                Category Name
                                            </span>
                                        </Link>
                                    </div>
                                    <div style={{backgroundImage: `url(/images/watch1.png)`, width: "350px", height: "350px", backgroundSize: "cover"}} className="ml-6">
                                        <Link to="/categoryProducts">
                                            <span className="flex justify-center text-white font-bold text-2xl hover:text-purple-700 hover:text-3xl" style={{marginTop: "40%"}}>
                                                Category Name
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ml-4" style={{marginTop: "13%"}}>
                                        <i className="fa fa-angle-double-right text-2xl hover:text-purple-700"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                
                <Footer />
            </div>
        </>
    );
}
export default CategoryProducts;