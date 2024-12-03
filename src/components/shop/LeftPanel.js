import {
  getParentCategories,
  getChildCategories,
} from "../../utils/CategoryUtils";
import { fetchCategories } from "../../utils/Category_APIs";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function LeftPanel() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [search, setSearch] = useState(true);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) =>{
    if(event.key == 'Enter'){
      setSearch(true);
      search && navigate(`/searchedProducts/${searchQuery}`);
      setSearchQuery('')
    };
    }

  const {
    data: categories,
    error: categoriesError,
    isLoading: loadingCategories
  } = useQuery ({
    queryKey: ["categories"],
    queryFn: () => fetchCategories()
  })

  if (loadingCategories) return <div>Loading Categories...</div>
  if (categoriesError) return <div>Error</div>

  const parentCategories = getParentCategories(categories);

  return (
    <>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-2">
          <span className="font-medium ">Search</span>
          <div className="flex flex-row border border-black rounded-md w-1/2 p-1.5">
            <input
              className="rounded text-xs outline-none"
              type="text"
              placeholder="Search..."
              onChange={handleSearchQueryChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <span className="font-medium">Categories</span>

          {categories &&
            categories.map((category) => {
              if (parentCategories.includes(category)) {
                const childCategories = getChildCategories(
                  category,
                  categories
                );
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
      </div>
    </>
  );
}

export default LeftPanel;
