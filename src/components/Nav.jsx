import React, { useState, useEffect } from 'react';
import CommonButton from './common/CommonButton';
import CommonPara from './common/CommonPara';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isNavOpen]);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="py-[20px] px-[20px] w-full">
      <div className="container max-w-[1140px] mx-auto">
        <div className="flex items-center justify-between w-full">
          <a className=" text-[24px] no-underline z-10 font-medium " href="">
            Leeds Junk
          </a>
          <ul className={`fixed lg:static flex justify-center items-center flex-col lg:flex-row w-full lg:w-auto bg-white lg:bg-transparent top-0 bottom-0 right-0 transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} transition-transform duration-300 z-20 p-8 lg:p-0 gap-6 lg:gap-6`}>
            <li className="flex flex-col lg:flex-row gap-6 items-center">
              <NavLink className="no-underline hover:underline transition-all duration-300" to="/">
                <CommonPara ParaText="Home" ParaClass=" !font-semibold" />
              </NavLink>
              <NavLink className="no-underline hover:underline transition-all duration-300" to="/about">
                <CommonPara ParaText="About" ParaClass=" !font-semibold" />
              </NavLink>
              <NavLink className="no-underline hover:underline transition-all duration-300" to="/product">
                <CommonPara ParaText="Product" ParaClass=" !font-semibold" />
              </NavLink>
              <NavLink className="no-underline hover:underline transition-all duration-300" to="/contact">
                <CommonPara ParaText="Contact Us" ParaClass=" !font-semibold" />
              </NavLink>
            </li>
            <li className="mt-4 lg:mt-0 min-lg:hidden">
              <CommonButton />

            </li>
          </ul>
          <ul className='max-lg:hidden block'>
            <li className="mt-4 lg:mt-0">
              <CommonButton />
            </li>
          </ul>

          <div onClick={toggleNavbar} className="lg:hidden z-30 cursor-pointer flex flex-col gap-1">
            <span className={`w-8 h-1 rounded bg-black transition-transform duration-300 origin-left ${isNavOpen ? 'rotate-[32deg]' : ''}`}></span>
            <span className={`w-8 h-1 rounded transition-all duration-300 ${isNavOpen ? 'bg-transparent' : 'bg-black'}`}></span>
            <span className={`w-8 h-1 rounded bg-black transition-transform duration-300 origin-left ${isNavOpen ? '-rotate-[32deg]' : ''}`}></span>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
