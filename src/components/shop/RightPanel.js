import ProductGrid from "./ProductGrid";

function RightPanel(props) {
  return (
    <div className="relative">
      <div>
        <ProductGrid data={props.data} />
      </div>
    </div>
  );
}

export default RightPanel;
