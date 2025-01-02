import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className="transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/menu"
          className="transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          Our Menu
        </Link>
      </li>

      <li>
        <Link
          to="/order/salad"
          className="transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          Order Food
        </Link>
      </li>
      <li>
        <Link
          to="/login"
          className="transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/signup"
          className="transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          Signup
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className=" container mx-auto navbar fixed top-0 left-0 right-0 z-10 bg-gradient-to-r from-blue-500 via-pink-200 to-purple-700 text-white shadow-lg ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-semibold">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary text-white transition-all duration-300 hover:bg-blue-800">
            Button
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
