import React, { useState } from "react";
import styles from "../utils/style";
import { navigationLinks } from "../utils/constants";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState("home");
  const toggleHandler = () => setToggleNav(!toggleNav);
  const activeHandler = (id) => setActive(id);
  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      <img
        src={logo}
        alt="logo"
        className="w-[130px] h-[35px] cursor-pointer"
      />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className={`font-montserrat font-normal cursor-pointer text-[16px]  ${
              idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"
            }
              ${active === nav.id ? "text-white" : "text-lightWhite"}
             hover:text-white transition-all duration-500`}
            onClick={() => activeHandler(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img
          src={`${toggleNav ? close : menu}`}
          alt="menu"
          className="w-[30px] h-[30px] cursor-pointer"
          onClick={toggleHandler}
        />
        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 mt-10 right-0 left-0 w-full sidebar`}
        >
          <ul className="list-none flex  justify-center items-center flex-1">
            {navigationLinks.map((nav, idx) => (
              <li
                key={nav.id}
                className={`font-montserrat font-normal cursor-pointer text-[16px]  ${
                  idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"
                }
                ${active === nav.id ? "text-white" : "text-lightWhite"}
              hover:text-white transition-all duration-500`}
                onClick={() => activeHandler(nav.id)}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
