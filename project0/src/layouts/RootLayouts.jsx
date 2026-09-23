// import { Outlet } from "react-router";
import Navbar from "../components/navigation/Navbar";
import Home from "../components/Home";

const RootLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />

      {/* <Outlet /> */}

      <Home />
    </div>
  );
};

export default RootLayouts;
