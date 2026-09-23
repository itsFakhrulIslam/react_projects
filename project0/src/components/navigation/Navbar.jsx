import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="shadow-2xl flex justify-between items-center px-5 py-3 sticky top-0 z-50 bg-white">
        <div className="">
          <Link to="/">
            <img className="w-50" src="logo.svg" alt="" />
          </Link>
        </div>

        <div className="">
          <ul className="flex gap-4 capitalize font-semibold text-md">
            <a to="/">home</a>
            <a href="#about">about</a>
            <a href="#services">services</a>
            <a href="#contact">contact</a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/**
 * 
 * 
 * The odd jobs you keep
meaning href sort

 <div className="navbar bg-base-100 shadow-sm flex justify-between px-5">
        <div className="">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>

        <div className="">
          <ul className="menu menu-horizontal px-1 flex">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
 */
