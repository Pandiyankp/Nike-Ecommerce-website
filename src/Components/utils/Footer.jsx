import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
      <footer className=" bg-theme  pt-7 pb-7">
        <div className=" nike-container text-slate-200 ">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto 
          md:max-w-none md:gap-5
          ">
            {titles.map((val, i) => (
              <div className="grid items-center" key={i}>
                <h1 className="text-lg lg:text-base md:text-small
                uppercase font-semibold ">{val.title}</h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul className="grid items-center gap-1" key={i}>
                {list.map((link, i) => (
                  <li className="text-sm sm:text-xs" key={i}>
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center ">Copyright  <span className="text-base font-bold
            ">&copy; </span>All Reserved Rights 2022<span className="font-semibold uppercase"> developer Pandiyan-k </span></p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
