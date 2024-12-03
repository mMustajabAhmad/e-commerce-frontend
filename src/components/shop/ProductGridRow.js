import ShopProduct from "./ShopProduct";

function ProductGridRow(props) {
  const products = props.data;
  const rows = [];
  rows.push(
    <div className="flex flex-col ">
      <ShopProduct data={products ? products[0] : []} />
    </div>
  );
  for (let i = 1; i < products.length; i++) {
    rows.push(
      <div className="flex flex-col ml-4">
        <ShopProduct data={products ? products[i] : []} />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-row mt-4">{rows}</div>
    </>
  );
}

export default ProductGridRow;
