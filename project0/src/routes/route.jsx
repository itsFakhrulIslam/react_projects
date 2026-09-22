import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    element: <p>hello test</p>,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/services", Component: Services },
    ],
  },
]);
