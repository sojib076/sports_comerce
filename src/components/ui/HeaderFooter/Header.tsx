import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <div className="sticky top-0 z-40">
        <nav className="w-full p-5 bg-black text-white md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <span className="text-2xl cursor-pointer">
              loading...
            </span>
            <span
              className="text-3xl cursor-pointer mx-2 md:hidden block text-white"
              onClick={toggleMenu}
            >
              {menuOpen ? <MenuIcon /> : <MenuIcon />}
            </span>
          </div>
          <ul
            className={`md:flex lg:hidden z-40 text-white md:items-center ${
              menuOpen ? "opacity-100 top-[72px]" : "opacity-0 top-[-300px]"
            } absolute bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 transition-all ease-in duration-500`}
          >
            <li className="mx-4 my-6 md:my-0 text-xl">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4 my-6 md:my-0 text-xl">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="mx-4 my-6 md:my-0 text-xl">
              <Link to="/allproducts">All Products</Link>
            </li>
            <li className="mx-4 my-6 md:my-0 text-xl">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-4 my-6 md:my-0 text-xl">
              <Link to="/manageproducts">Manage Products</Link>
            </li>
          </ul>

          {/*  this is for desktop */}

          <ul
            className={`md:flex md:items-center hidden lg:ml-[25%] lg:gap-5 md:ml-[18%] transform absolute bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500`}
          >
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-xl" to="/">
                Home
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-xl" to="/cart">
                Cart
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-xl" to="/allproducts">
                All Products
              </Link>
            </li>
            <li className="my-6 md:my-0">
              <Link className="text-xl" to="/about">
                About
              </Link>
            </li>
            <li className="my-6 md:my-0">
              <Link className="text-xl" to="/manageproducts">
                Manage Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
