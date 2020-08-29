import React from "react";
import "./login.css";

const Login = (props) => {
    const { handleSubmit} = props;
    return (
        <div className="row justify-content-md-center align-items-center login-page">
      <div className="col-lg-3 login-div">
        <h2 className="login-heading">Login</h2>

        <form name="form">
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="lar la-user"></i>
              </span>
            </div>

            <input
              type="text"
              name="email"
              placeholder="Username" 
              className="form-control" 
            />
          </div>
        
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="las la-lock"></i>
              </span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password" 
              className="form-control" 
            />
          </div>

          <div className="form-group mb-0">
            <button onClick={handleSubmit}  className="btn btn-primary btn-block btn-login"> 
              Login
            </button> 
          </div>
         
        </form>
      </div>
    </div>
    );
}

export default Login;