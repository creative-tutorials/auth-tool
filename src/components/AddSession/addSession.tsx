import React from "react";
import { useState, useEffect } from "react";
export function AddSession({ email, facebook, google, twitter, text }) {
  const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    Check();
    console.log("hmm");
  });

  const RenderEmailComponent = () => {
    window.location.pathname = "/session/email";
  };
  const Check = () => {
    const getClassEvent = localStorage.getItem("class");
    if (getClassEvent) {
        setisLoaded(true);
    }
    if (!getClassEvent) {
       setisLoaded(false);
    }

    console.log(isLoaded);
  };
  return (
    <div className="addComponent">
      {isLoaded ? (
        <div className="componentConent">
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
      ) : (
        <h1>Failed</h1>
      )}
    </div>
  );
}
