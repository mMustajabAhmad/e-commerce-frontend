function EmailSubscription(){
    return(
        <div>
            <p className="font-bold text-5xl flex justify-center mt-6">Subscribe</p>
            <p className="text-gray-500 flex justify-center mt-4">Subscribe to our newsletter to receive news on update</p>
            <input className="px-10 py-2 border rounded" type="email" placeholder="Your Email Address" style={{marginLeft: "38%", marginTop: "2%", width: "350px"}}></input>
            <br></br>
            <button className="bg-black text-white mt-6 pt-3 pb-3 pl-10 pr-10 mb-12 rounded hover:bg-purple-700" type="submit" style={{marginLeft: "45%"}}>Subscribe</button>
            <br></br>
        </div>
    );
}
export default EmailSubscription;