import React from "react";
import { Loader } from "../views/loader";
export function FormContainer({
  EmailInputValue,
  PasswordInputValue,
  handleRequest,
  isLoaderActive
}:any) {
  return <div className="form-container">
          <div id="input_box">
            <input type="text" placeholder="Enter your email address" ref={EmailInputValue} />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div id="input_box">
            <input type="password" placeholder="Enter your password" ref={PasswordInputValue} />
            <i className="fa-solid fa-lock"></i>
          </div>
          <div id="button-container">
            <button onClick={handleRequest}>
              {isLoaderActive ? <Loader /> : null}
              <span id="button-text">
                {isLoaderActive ? null : <>Submit Request</>}
              </span>
            </button>
          </div>
        </div>;
}
  