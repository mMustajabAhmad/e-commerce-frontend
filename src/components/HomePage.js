import Header from "./Header";
import Footer from "./Footer";

function HomePage(){
    return (
        <>
            <div className="wrapper">
                <Header />
                <main className="flex flex-col min-h-screen">
                    <h1>This is body</h1>
                </main>
                <Footer className="mt-auto"/>
            </div>
        </>
    );
}

export default HomePage;