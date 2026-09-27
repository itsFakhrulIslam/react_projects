import { Features } from "tailwindcss";
import Banner from "../sections/Banner";
import Counter from "../sections/Counter";
import Services from "../sections/Services";

const HomePages = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-5">
      {/* all sections mounts here */}
      <Banner />
      <Counter />
      <Services />
      <Features />
    </div>
  );
};

export default HomePages;
