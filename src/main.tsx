import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter
} from "react-router-dom";
import { RouteRenderer } from "./routes";
import "./style.css";

const root = document.getElementById('app') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteRenderer />
    </BrowserRouter>
  </React.StrictMode>
);
// reeber to turn off source mapping in production