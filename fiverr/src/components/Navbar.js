import React, { useState } from "react";
import { NavData } from "../data/NavData";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const activeLink =
    "flex items-center justify-center capitalize space-x-1 font-bold border-b-2 py-2 px-2 ";
  const normalLink =
    "flex items-center justify-center capitalize space-x-1 font-bold ";
  return (
    <React.Fragment>
      <section>
        <div className="h-20 w-auto flex justify-between items-center px-10 md:w-4/5 md:mx-auto">
          {/* logo section */}
          <div>
            <p className="text-2xl font-bold capitalize">fiverr</p>
        
          </div>

          {/* large screen */}
          <div className="hidden md:flex md:justify-center md:items-center md:space-x-10">
            {NavData.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <div>{item.icon}</div>
                    <div>{item.title}</div>
                  </NavLink>
                </div>
              );
            })}
          </div>

          {/* small screen */}
          <div className="md:hidden">
            <div>
              <div className="text-2xl">
                {toggle === false ? (
                  <FaBars onClick={handleToggle} />
                ) : (
                  <FaTimes onClick={handleToggle} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
