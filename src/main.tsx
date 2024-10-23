import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "./routes";
import "./style.css";

const router = createBrowserRouter(routes);
const root = document.getElementById('app') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// reeber to turn off source mapping in production