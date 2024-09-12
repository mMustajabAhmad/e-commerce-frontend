import { RiUser6Line } from "react-icons/ri";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = 'http://localhost:3001'

const logout = async() => {
  const token = localStorage.getItem('token');
  await axios.get(
    `${API_BASE_URL}/logout`,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
  localStorage.removeItem("token");
}
const ProfileMenu = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/signin');
  };

  const links = [
    { href: "/myProfile", label: "My Profile" },
    { href: "/signin", label: "Log Out", onClick: handleLogout },
    { href: "/orderHistory", label: "Order History" },
  ];

  return (
    <>
      <div className="text-right">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-white">
            <RiUser6Line size={"1.5em"} />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right bg-white text-black rounded-xl border border-white/5 text-sm/6 transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            {links.map((link, index) => (
              <MenuItem key={index} >
                {link.label === "Log Out" ? (
                <button
                  onClick={link.onClick}
                  className="group flex w-full items-center gap-2 rounded-lg py-3 px-4 hover:bg-purple-500 hover:text-white"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  to={link.href}
                  className="group flex w-full items-center gap-2 rounded-lg px-4 py-3 hover:bg-purple-500 hover:text-white text-sm"
                >
                  {link.label}
                </Link>
              )}
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
    </>
  );
};

export default ProfileMenu;
