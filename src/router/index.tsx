import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);
