import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Services from "../pages/Services";
// import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    // children: [
    //   { index: true, Component: Home },
    //   { path: "/about", Component: About },
    //   { path: "/services", Component: Services },
    //   { path: "/contact", Component: Contact },
    // ],
  },
]);
