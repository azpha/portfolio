import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App.tsx";
import "./main.css";
import FourOhFour from "./components/FourOhFour.tsx";
import Links from "./pages/Links.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <FourOhFour />,
  },
  {
    path: "/links",
    element: <Links />,
    errorElement: <FourOhFour />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
