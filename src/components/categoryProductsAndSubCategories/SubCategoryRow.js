import SubCategory from "./SubCategory";
import { useEffect, useState } from "react";

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
      <div style={{ marginTop: "13%" }} onClick={() => moveLeft()}>
        <i className="fa fa-angle-double-left text-2xl hover:text-purple-700"></i>
      </div>

      {categoryRow}

      <div
        className="ml-4"
        style={{ marginTop: "13%" }}
        onClick={() => moveRight()}
      >
        <i className="fa fa-angle-double-right text-2xl hover:text-purple-700"></i>
      </div>
    </>
  );
}
export default SubCategoryRow;
