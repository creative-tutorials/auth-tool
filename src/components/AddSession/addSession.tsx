import React from "react";
import { useState, useEffect } from "react";
export function AddSession({
  Rendered,
  email,
  facebook,
  google,
  twitter,
  text,
}: any) {
  useEffect(() => {
    return console.log("Loading...");
  });

  const RouteEmailSessionPath = () => {
    window.location.pathname = "/session/email";
  };
  return (
    <div className="addComponent">
      {Rendered ? (
        <div className="componentConent">
          <h3>{text}</h3>
          <div id="session_block">
            <div id="c6">
              <div id="k-list" onClick={RouteEmailSessionPath}>
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
      ) : (
        <h1>Failed</h1>
      )}
    </div>
  );
}
