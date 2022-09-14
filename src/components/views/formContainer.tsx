import React from "react";
import { Loader } from "../views/loader";
export function FormContainer({
  EmailInputValue,
  PasswordInputValue,
  ProviderInputValue,
  handleRequest,
  isLoaderActive,
}: any) {
  return (
    <div className="form-container">
      <div id="input_box">
        <input
          type="text"
          placeholder="Email address"
          ref={EmailInputValue}
        />
        <i className="fa-solid fa-envelope"></i>
      </div>
      <div id="input_box">
        <input
          type="password"
          placeholder="Password"
          ref={PasswordInputValue}
        />
        <i className="fa-solid fa-lock"></i>
      </div>
      <div id="input_box">
        <input
          type="text"
          placeholder="Provider"
          ref={ProviderInputValue}
        />
        <i className="fa-solid fa-key"></i>
      </div>
      <div id="button-container">
        <button onClick={handleRequest}>
          {isLoaderActive ? <Loader /> : null}
          <span id="button-text">
            {isLoaderActive ? null : <>Submit Request</>}
          </span>
        </button>
      </div>
    </div>
  );
}
