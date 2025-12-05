import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aaa from "./routes/aaa";
import Bbb from "./routes/bbb";

const 페이지목록 = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aaa", element: <Aaa /> },
  { path: "/bbb", element: <Bbb /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={페이지목록} />);
