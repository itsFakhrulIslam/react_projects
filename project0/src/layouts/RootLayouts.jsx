import { Outlet } from "react-router";
import Navbar from "../components/navigation/Navbar";

const RootLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-5">
      <Navbar />

      <Outlet />

      <h1>root layouts down here</h1>
    </div>
  );
};

export default RootLayouts;
