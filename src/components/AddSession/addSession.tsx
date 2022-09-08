import React from "react";
export function AddSession({ ComponentDiv, email, facebook, google, twitter, text }) {
  return (
    <div className="addComponent">
      <div className="componentConent" ref={ComponentDiv}>
        <h3>{text}</h3>
        <div id="session_block">
          <div id="c6">
            <div id="k-list">
              <img src={email} alt="" />
              <span id="k-list-name">Login using Email</span>
            </div>
            <div id="k-list">
              <img src={facebook} alt="" />
              <span id="k-list-name">Login With Facebook</span>
            </div>
            <div id="k-list">
              <img src={google} alt="" />
              <span id="k-list-name">Login With Google</span>
            </div>
            <div id="k-list">
              <img src={twitter} alt="" />
              <span id="k-list-name">Login With Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
