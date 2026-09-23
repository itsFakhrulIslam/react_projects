const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 shadow px-5">
      <div id="navigate" className="w-30">
        <a href="/">
          <img src="logo.webp" alt="brand logo" />
        </a>
      </div>

      <div className="">
        <ul className="flex gap-4">
          <li className="hover:text-amber-500 transition duration-300">
            <a href="">হোম</a>
          </li>
          <li className="hover:text-amber-500 transition duration-300">
            <a href="#services">সেবা সমূহ</a>
          </li>
          <li className="hover:text-amber-500 transition duration-300">
            <a href="#features">ফিচার সমূহ</a>
          </li>
          <li className="hover:text-amber-500 transition duration-300">
            <a href="#packages">প্যাকেজ সমূহ</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
