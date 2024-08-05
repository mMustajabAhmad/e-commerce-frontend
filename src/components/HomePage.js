import Header from "./Header";
import Footer from "./Footer";
import EmailSubscription from "./EmailSubsription";

function HomePage(){
    return (
        <>
            <div className="wrapper mt-6 ml-6 mr-6">
                <Header />
                <main className="flex flex-col min-h-screen">
                    <div style={{backgroundImage: "url('/images/product-photography-1.jpg')", height: "590px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: "0.9"}} class="grid place-items-center">

                    </div>
                    <EmailSubscription />
                </main>
                <Footer className="mt-auto"/>
            </div>
        </>
    );
}

export default HomePage;