### Essentials command
1. `bun create vite`
2. `bun add tailwindcss @tailwindcss/vite` , configure: *vite.config.ts* `import tailwindcss from '@tailwindcss/vite'` add instance `tailwindcss()` and add global css `@import "tailwindcss";`
3. `bun add react-router` , | import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]); | , |<RouterProvider router={router} /> RouterProvider add here|
