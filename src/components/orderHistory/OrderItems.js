const OrderItems = () => {
  return (
    <>
      <div className="flex flex-col gap-2 mx-8 border h-[14em] overflow-auto rounded ">
        <div className="flex flex-row gap-5 my-2">
          <div className="flex flex-col ml-6 ">
            <img src='images/watch1.png' alt='image' className="h-28 w-28 rounded"/>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-medium">Product Name</span>
            <span className="text-sm">$ 1000</span>
            <span className="text-sm">Size : <span className="text-red-700">S</span></span>
            <span className="text-sm">Quantity: 2</span>
            <span className="bg-gray-300 flex flex-row justify-center text-sm rounded">v123</span>
          </div>
        </div>

        <div className="flex flex-row gap-5 my-2">
          <div className="flex flex-col ml-6 ">
            <img src='images/watch1.png' alt='image' className="h-28 w-28 rounded"/>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-medium">Product Name</span>
            <span className="text-sm">$ 1000</span>
            <span className="text-sm">Size : <span className="text-red-700">S</span></span>
            <span className="text-sm">Quantity: 2</span>
            <span className="bg-gray-300 flex flex-row justify-center text-sm rounded">v123</span>
          </div>
        </div>
        <hr className="mx-6"/>
      </div>
    </>
  );
};

export default OrderItems;