import { useEffect, useState } from "react";
import CategoryProduct from "./CategoryProduct";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

function CategoryProductRow(props) {
  const products = props.data || [];
  const [productRow, setProductRow] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    if (products && products.length < 4) {
      setEnd(products.length);
    } else {
      setEnd(4);
    }
  }, [products]);

  useEffect(() => {
    if (products.length > 0) {
      const rows = [];
      for (let i = start; i < end; i++) {
        if (products[i]) {
          rows.push(<CategoryProduct data={products[i]} />);
        }
      }
      setProductRow(rows);
    }
  }, [products, start, end]);

  function moveRight() {
    if (start < products.length && end < products.length) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  }

  function moveLeft() {
    if (start > 0 && end > 0) {
      setStart(start - 1);
      setEnd(end - 1);
    }
  }

  return (
    <>
      <FaAnglesLeft
        size={"1.5em"}
        className="mt-[10%]"
        onClick={() => moveLeft()}
      />
      {productRow}
      <FaAnglesRight
        size={"1.5em"}
        className="ml-4 mt-[10%]"
        onClick={() => moveRight()}
      />
    </>
  );
}

export default CategoryProductRow;
