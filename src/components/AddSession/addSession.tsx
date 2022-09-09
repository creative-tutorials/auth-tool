import React from "react";
export function AddSession({
  ComponentDiv,
  email,
  facebook,
  google,
  twitter,
  text,
}) {
  const RenderEmailComponent = () => {
    window.location.pathname = "/session/email";
  };
  return (
    <div className="addComponent">
      <div className="componentConent" ref={ComponentDiv}>
        <h3>{text}</h3>
        <div id="session_block">
          <div id="c6">
            <div id="k-list" onClick={RenderEmailComponent}>
              <img src={email} alt="email icon" />
              <span id="k-list-name">Login using Email</span>
            </div>
            <div id="k-list">
              <img src={facebook} alt="facebook icon" />
              <span id="k-list-name">Login With Facebook</span>
            </div>
            <div id="k-list">
              <img src={google} alt="google icon" />
              <span id="k-list-name">Login With Google</span>
            </div>
            <div id="k-list">
              <img src={twitter} alt="twitter icon" />
              <span id="k-list-name">Login With Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
