import { Outlet } from "react-router";

const RootLayouts = () => {
  return (
    <div>
      <h1>root layouts up here</h1>

      <Outlet />

      <h1>root layouts down here</h1>
    </div>
  );
};

export default RootLayouts;
