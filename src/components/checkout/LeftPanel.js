import OrderSummaryProduct from "./OrderSummaryProduct";

const LeftPanel = (props) => {
  const cart = props.data;
  const orderSummaryProducts = [];
  for (let i = 0; i < cart.length; i++) {
    if (i == cart.length - 1) {
      orderSummaryProducts.push(
        <>
          <OrderSummaryProduct cartProduct={cart[i]} />
        </>
      );
    } else {
      orderSummaryProducts.push(
        <>
          <OrderSummaryProduct cartProduct={cart[i]} />
          <hr className="mx-4" />
        </>
      );
    }
  }
  return (
    <>
      <div className="flex flex-col w-2/3 ml-16 mr-8 gap-2 mt-20">
        <span className="font-medium text-lg flex flex-row ml-1">
          Order Summary
        </span>
        <div className="flex flex-col h-2/3 overflow-auto rounded-lg border">
          {orderSummaryProducts}
        </div>
      </div>
    </>
  );
};

export default LeftPanel;
