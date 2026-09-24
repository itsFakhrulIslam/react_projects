import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../sections/Banner";
import Counter from "../sections/Counter";
import Services from "../sections/Services";

const MainLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-5">
      <Navbar />

      {/* all sections mounts here */}
      <Banner />
      <Counter />
      <Services />

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
