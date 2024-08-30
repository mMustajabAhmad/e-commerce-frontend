import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Link } from "react-router-dom";
import { getChildCategories } from "../../utils/CategoryUtils";
import { FaAngleDown } from "react-icons/fa6";

const CategoriesMenu = ({ categories, parentCategories }) => {
  return (
    <div className="text-right ">
      <Menu>
        <MenuButton className="font-medium inline-flex items-center gap-2 rounded-md px-3">
          <Link to="/categories">Categories</Link>
          <FaAngleDown />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right bg-white text-black rounded-xl border text-sm/6 transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 mt-2"
        >
          <div>
            {categories &&
              categories.map((category) => {
                if (parentCategories.includes(category)) {
                  const childCategories = getChildCategories(
                    category,
                    categories
                  );
                  return (
                    <>
                      <MenuItem
                        key={category.id}
                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3"
                      >
                        <Link
                          to={`/categoryProducts/${category.id}`}
                          className={
                            "group flex w-full items-center gap-2 rounded-lg px-3 py-2 hover:bg-purple-500 hover:text-white text-sm"
                          }
                        >
                          {category.name}
                        </Link>
                      </MenuItem>
                      {childCategories &&
                        childCategories.map((child) => {
                          return (
                            <MenuItem key={child.id} className="ml-3">
                              <Link
                                to={`/categoryProducts/${child.id}`}
                                className={
                                  "group flex w-full items-center gap-2 rounded-lg px-3 py-2 hover:bg-purple-500 hover:text-white text-sm"
                                }
                              >
                                {child.name}
                              </Link>
                            </MenuItem>
                          );
                        })}
                    </>
                  );
                }
              })}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default CategoriesMenu;
