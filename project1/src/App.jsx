import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./layouts/MainLayouts";
import Packages from "./pages/Packages";
import HomePages from "./pages/HomePages";

// react setup here
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      { index: true, Component: HomePages },
      { path: "/packages", Component: Packages },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <h className="text-center capitalize bg-amber-600/60">react project1</h>
    </RouterProvider>
  );
}

export default App;
