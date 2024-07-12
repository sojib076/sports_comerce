import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-gray-50 mt-20 pt-10 absolute">
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-black">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 my-2">
                Find us on any of these platforms, we respond in 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Facebook className="text-blue-600 w-full text-center text-xl" />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-accent text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/cart">
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/allproducts">
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/manageproducts">
                        Manage Products
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-accent py-1 text-balance font-bold text-black">
                <span className="text-secondary text-black">Copyright © 2024 Ds Accessories</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
