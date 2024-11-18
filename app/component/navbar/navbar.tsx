import React from "react";
import NavLink from "./navlink";
import { SearchOutlined, ShoppingBagOutlined } from "@mui/icons-material";

function Navbar() {
  return (
    <>
      <div className="text-white py-4 flex flex-col ">
        <div className="flex justify-between item-enter p-3 px-16 bg-black">
          <div className="">
            <span className="text-primaryYellow">475092+ </span>
            No. of Students Counselled
          </div>
          <div className="">
            <span className="text-primaryYellow">475092+ </span>
            No. of Assisted in Placement
          </div>
        </div>
        <hr className="bg-gray-50 h-[1px] opacity-15" />
        <div className="flex flex-col justify-center items-between h-full bg-black">
          <div className="flex justify-between items-center px-4">
            <div className="logo">
              <img
                src="https://wayspire.in/wp-content/uploads/2023/09/new-logo-wayspire-copy-600x315-removebg-preview.png"
                alt="Logo"
                className="h-24"
              />
            </div>
            <div className="redirection flex gap-4 item-center justify-center">
              <NavLink url="/" title={"Home"} showArrow={true} />
              <NavLink url="/courses" title={"Program"} showArrow={true} />
              {/* <NavLink url="/career" title={"Career"} showArrow={true} /> */}
              <NavLink
                url="/contact-us"
                title={"Contact Us"}
                showArrow={false}
              />
              <NavLink url="about" title={"About"} showArrow={false} />
              <NavLink url="blogs" title={"Blogs"} showArrow={false} />
            </div>
            <div className="auth flex gap-4 items-center">
              <div className="search">
                <SearchOutlined />
              </div>
              <div className="cart">
                <ShoppingBagOutlined />
              </div>
              <div className="btn-auth bg-primaryYellow px-4 py-1 rounded-full font-semibold flex items-center gap-1 text-black">
                Sign in →
              </div>
            </div>
          </div>
          {/* Banner part  */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
