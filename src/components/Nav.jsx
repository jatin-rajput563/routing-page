import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isNavOpen);
  }, [isNavOpen]);

  return (
    <nav className=" w-full py-4 fixed">
      <div className="max-w-[1140px] mx-auto flex justify-between items-center">
        <a href="/" className="text-black font-bold text-lg">
          Leeds Junk
        </a>
        <ul className="hidden md:flex gap-8 items-center text-black font-medium">
          {["About", "Services", "FAQ’s", "Contact Us"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="hover:underline underline-offset-4"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#quote"
          className="bg-black text-white px-5 py-2 rounded-full font-semibold text-sm hover:scale-105 transition"
        >
          GET QUOTE
        </a>
        <div className="md:hidden z-50" onClick={() => setIsNavOpen(!isNavOpen)}>
          <div className="space-y-1 cursor-pointer">
            <div className={`w-6 h-[3px] bg-black transition-transform origin-left ${isNavOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-[3px] bg-black transition-all ${isNavOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-[3px] bg-black transition-transform origin-left ${isNavOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full bg-gradient-to-r from-lime-400 to-cyan-400 transform transition-transform duration-300 ${
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col items-center justify-center gap-8 text-black font-medium`}
      >
        {["About", "Services", "FAQ’s", "Contact Us"].map((item, idx) => (
          <a
            key={idx}
            href={`#${item.toLowerCase().replace(/ /g, '-')}`}
            className="text-xl hover:underline underline-offset-4"
            onClick={() => setIsNavOpen(false)}
          >
            {item}
          </a>
        ))}
        <a
          href="#quote"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold text-base"
          onClick={() => setIsNavOpen(false)}
        >
          GET QUOTE
        </a>
      </div>
    </nav>
  );
};

export default Nav;
