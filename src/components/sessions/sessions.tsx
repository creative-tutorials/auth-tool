import React from "react";
import ReactDOM from "react-dom/client";
import Klip from "../functions/createsHTMLElement";
import { Header } from "../views/header";
import { useEffect, useState, useRef } from "react";
import "../../styles/content.css";
import lock from "/lock.svg";

function SessionStorage() {
  const [isCaptured, setisCaptured] = useState(false);
  const [renderOnce, setrenderOnce] = useState(false);
  const [pagerenderCount, setpagerenderCount] = useState(0);
  const currentDiv: any = useRef();
  useEffect(() => {
    renderLoadOnceState();
    {
      /* if renderOnce is true, render the function immediately, else  retuen null */
      renderOnce ? loadSessions() : null;
    }
  });

  async function loadSessions() {
    try {
      const response = await fetch("http://localhost:4000/api/sessions", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        // console.log(result);
        const new_result = result;

        const mapedresult = new_result.map(
          (items: {
            email: any;
            providers: any;
            password: any;
            loginTime: any;
            coordinates: any;
          }) => {
            let email = items.email;
            let providers = items.providers;
            let password = items.password;
            let sessionTime = items.loginTime;
            let coordinates = items.coordinates;
            console.log("ok");
            console.log(items);
            ReactDOM.createRoot(
              document.querySelector(".f9") as HTMLElement
            ).render(
              <React.StrictMode>
                <Klip
                  title={"Hello World"}
                  email={email}
                  password={password}
                  sessionTime={sessionTime}
                />
              </React.StrictMode>
            );
          }
        );
      }
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * If the page has been rendered once, then set the renderOnce state to true.
   * @returns the setrenderOnce(true) function.
   */
  const renderLoadOnceState = () => {
    const interval = setInterval(() => {
      setpagerenderCount(1);
    }, 100);
    if (pagerenderCount === 1) {
      clearInterval(interval);
      return setrenderOnce(true);
    }
  };
  return (
    <div className="container-page">
      <Header
        text1={"Dashboard"}
        text2={"Admin"}
        text3={"Key Generate"}
        text4={"Sessions"}
        text5={"Settings"}
        text6={"Go Pro"}
      />
      <div className="view-page">
        <h3>Recently Added</h3>
        <div className="f9" ref={currentDiv}></div>
      </div>
    </div>
  );
}
export default SessionStorage;
