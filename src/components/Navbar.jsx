import logotype from "../assets/images/logotype.png";
import { navLinks } from "../constants/index";
import { Link } from "react-router-dom";

const Navbar = ({showContent, hideContent}) => {

  return (
    <header className="header absolute top-0 left-0 right-0 ">
      <div className="px-[7.6rem] h-full">
        <nav className="flex items-center justify-between text-[0.95rem] h-full">
          <div>
            <img
              src={logotype}
              alt="logo"
              width={145}
              height={60}
              className="cursor-pointer hover:opacity-[0.86]"
            />
          </div>
          <ul className="flex items-center gap-10 font-semibold text-white">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  link.button
                    ? "no-underline"
                    : "hover:underline hover:text-gray-300 transition-all duration-300 ease-in-out"
                }`}
                onMouseEnter={link.dropdownd ? showContent : null}
                onMouseLeave={link.dropdownd ? hideContent : null}
              >
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
