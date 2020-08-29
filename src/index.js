import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
 
import "bootstrap/dist/css/bootstrap.css"; 
import "line-awesome/dist/line-awesome/css/line-awesome.css";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

 