import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 여기서부터
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aaa from "./routes/aaa";
import Bbb from "./routes/bbb";
import Board from "./routes/board1";

const 페이지목록 = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aaa", element: <Aaa /> },
  { path: "/bbb", element: <Bbb /> },
  { path: "/board1", element: <Board /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as ReactDOM.Container
);
root.render(<RouterProvider router={페이지목록} />);
