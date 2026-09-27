import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-5">
      <Navbar />
      
      <Outlet />

      <Footer />

      <a
        href="#navigate"
        className="transition duration-300 shadow-md py-2 px-5 rounded-full font-bold  bg-amber-500 z-40 sticky bottom-0"
        type="button"
      >
        ⬆
      </a>
    </div>
  );
};

export default MainLayouts;

/**
 * sites draft
 * banner (info and video)
 * couter
 * our_care
 * features
 * packages
 */
