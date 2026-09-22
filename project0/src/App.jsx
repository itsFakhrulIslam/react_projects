import { RouterProvider } from "react-router";
import { router } from "./routes/route";

function App() {
  return (
    <>
      <h1 className="text-center bg-amber-600/40 capitalize">react project0</h1>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
