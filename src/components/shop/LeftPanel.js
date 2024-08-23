import { useState, useEffect } from "react";
import apiClient from "../../api/authApi";
import {
  getParentCategories,
  getChildCategories,
} from "../../utils/CategoryUtils";

function LeftPanel() {
  const [categories, setCategories] = useState(null);
  const [parentCategories, setParentCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get("/categories");
        setCategories(response.data);
        setParentCategories(getParentCategories(response.data));
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <div style={{ marginLeft: "20%", marginTop: "20%" }}>
        <span className="font-medium ">Search</span>
        <br />
        <input
          className="mt-4 py-1 border px-4 rounded"
          type="text"
          placeholder="  Search..."
        ></input>
      </div>

      <div style={{ marginLeft: "20%", marginTop: "10%" }}>
        <span className="font-medium">Categories</span>
        <br />

        {categories &&
          categories.map((category) => {
            if (parentCategories.includes(category)) {
              const childCategories = getChildCategories(category, categories);
              return (
                <>
                  <div className="mt-4 font-medium text-sm">
                    <input type="checkbox" id={`c${category.id}`}></input>
                    <label
                      for={`c${category.id}`}
                      className="hover:text-purple-700"
                    >
                      {" "}
                      {category.name}
                    </label>
                  </div>

                  {childCategories &&
                    childCategories.map((child) => {
                      console.log("child", child);
                      return (
                        <div className="mt-4 ml-3 text-xs">
                          <input type="checkbox" id={`c${child.id}`}></input>
                          <label
                            for={`c${child.id}`}
                            className="hover:text-purple-700"
                          >
                            {" "}
                            {child.name}
                          </label>
                        </div>
                      );
                    })}
                </>
              );
            }
          })}
      </div>
    </>
  );
}

export default LeftPanel;
