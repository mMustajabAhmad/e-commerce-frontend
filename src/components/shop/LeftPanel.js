function LeftPanel(){
    return(
        <>
            <div style={{marginLeft: "20%", marginTop: "20%"}}>
                <span className="font-bold text-2xl">Search</span>
                <br/>
                <input className="mt-4 py-2 border px-4" type="text" placeholder="  Search..."></input>
            </div>

            <div style={{marginLeft: "20%", marginTop: "10%"}}>
                <span className="font-bold text-2xl">Categories</span>
                <br/>
                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> All Categories</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> Fashion</label>
                </div>
                
                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> Men</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> Women</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> Clothing</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> Shoes</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> Bags</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> Watches</label>
                </div>

            </div>

            <div style={{marginLeft: "20%", marginTop: "10%", marginBottom: "8%"}}>
                <span className="font-bold text-2xl">Size</span>
                <br/>
                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> All Sizes</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> XS</label>
                </div>
                
                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> S</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> M</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> L</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> XL</label>
                </div>

                

            </div>
        </>
    );
}

export default LeftPanel;