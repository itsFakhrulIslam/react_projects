import { RouterProvider } from "react-router";
import { router } from "./routes/route";

function App() {
  return (
    <>
      <h1>react project0</h1>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
