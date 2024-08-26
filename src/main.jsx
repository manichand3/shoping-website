import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import AboutUs from "./components/AboutUs";
import Cart from "./components/cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
  },
  {
    path: "/about",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "body",
    element: <Body></Body>,
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes></AppRoutes>
  </StrictMode>
);
