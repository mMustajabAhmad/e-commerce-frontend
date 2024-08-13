function CategoryCard(){
    return(
        <>
        <div style={{backgroundImage: `url(/images/watch1.png)`, width: "350px", height: "350px", backgroundSize: "cover"}} className="ml-6">
            <span className="flex justify-center text-white font-bold text-2xl hover:text-purple-700 hover:text-3xl" style={{marginTop: "40%"}}>Category Name</span>
        </div>
        </>
    );
}

export default CategoryCard;