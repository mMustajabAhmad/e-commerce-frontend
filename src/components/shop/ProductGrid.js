import ProductGridRow from "./ProductGridRow";
import {
  calculateNumberOfRows,
  calculateNumberOfColumns,
} from "../../utils/RowAndColUtils";

function ProductGrid(props) {
  const products = props.data;
  const numberOfRows = calculateNumberOfRows(products);
  const indexesForSlicing = calculateNumberOfColumns(products);
  const start = indexesForSlicing["start"];
  const end = indexesForSlicing["end"];

  const rows = [];

  for (let i = 0; i < numberOfRows; i++) {
    rows.push(
      <>
        <ProductGridRow
          data={products ? products.slice(start[i], end[i]) : []}
        />
        <br />
      </>
    );
  }

  return <>{rows}</>;
}

export default ProductGrid;
