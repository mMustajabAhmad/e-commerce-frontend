import SubCategory from "./SubCategory";
import { useEffect, useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

function SubCategoryRow(props) {
  const subCategories = props.data || [];
  const [categoryRow, setcategoryRow] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    if (subCategories && subCategories.length < 3) {
      setEnd(subCategories.length);
    } else {
      setEnd(3);
    }
  }, []);

  useEffect(() => {
    if (subCategories.length > 0) {
      const rows = [];
      for (let i = start; i < end; i++) {
        if (subCategories[i]) {
          rows.push(<SubCategory data={subCategories[i]} />);
        }
      }
      setcategoryRow(rows);
    }
  }, [subCategories, start, end]);

  function moveRight() {
    if (start < subCategories.length && end < subCategories.length) {
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
        className="mt-[13%]"
        onClick={() => moveLeft()}
      />

      {categoryRow}

      <FaAnglesRight
        size={"1.5em"}
        className="ml-4 mt-[13%]"
        onClick={() => moveRight()}
      />
    </>
  );
}
export default SubCategoryRow;
