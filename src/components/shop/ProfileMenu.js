import { RiUser6Line } from "react-icons/ri";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Link } from "react-router-dom";

const ProfileMenu = ({ logout }) => {
    const links = [
      { href: "/myProfile", label: "My Profile" },
      { href: "/signin", label: "Log Out", onClick: logout },
      { href: "/orderHistory", label: "Order History", onClick: logout },
    ];
  
    return (
      <>
        <div className="text-right">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3">
              <RiUser6Line size={"1.5em"} />
            </MenuButton>
  
            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right bg-white text-black rounded-xl border border-white/5 text-sm/6 transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              {links.map((link) => (
                <MenuItem>
                  <button
                    onClick={link.onClick && link.onClick}
                    className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3"
                  >
                    <Link
                      to={link.href}
                      className={
                        "group flex w-full items-center gap-2 rounded-lg px-3 py-2 hover:bg-purple-500 hover:text-white text-sm"
                      }
                    >
                      {link.label}
                    </Link>
                  </button>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </>
    );
  };

export default ProfileMenu;