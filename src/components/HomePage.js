import Header from "./Header";
import Footer from "./Footer";

function HomePage(){
    return (
        <>
            <div className="wrapper mt-6 ml-6 mr-6">
                <Header />
                <main className="flex flex-col min-h-screen">
                    <div style={{backgroundImage: "url('/images/product-photography-1.jpg')", height: "590px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: "0.9"}} class="grid place-items-center">

                    </div>
                    <div >
                        <p className="font-bold text-5xl flex justify-center mt-6">Subscribe</p>
                        <p className="text-gray-500 flex justify-center mt-4">Subscribe to our newsletter to receive news on update</p>
                        <input className="px-10 py-2" type="email" placeholder="Your Email Address" style={{marginLeft: "42%", marginTop: "2%"}}></input>
                        <br></br>
                        <button className="bg-black text-white mt-6 pt-3 pb-3 pl-10 pr-10 mb-12 rounded hover:bg-purple-700" type="submit" style={{marginLeft: "45%"}}>Subscribe</button>
                        <br></br>
                    </div>
                </main>
                <Footer className="mt-auto"/>
            </div>
        </>
    );
}

export default HomePage;