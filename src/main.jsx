import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Error from "./error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Keycodes from "./Keycodes";
import MouseChecker from "./MouseChecker";
import Keyboard from "./Keyboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/keycodes",
    element: <Keycodes />,
  },
  {
    path: "/mousechecker",
    element: <MouseChecker />,
  },
  {
    path: "/keyboardchecker",
    element: <Keyboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
