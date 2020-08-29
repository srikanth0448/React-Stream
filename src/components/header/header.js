import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            React Stream
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <NavLink exact className="nav-item nav-link" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-item nav-link" to="/stream">
                Stream
              </NavLink> 
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink> 
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;