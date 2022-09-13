import { Header } from "../views/header";
import { useEffect, useState, useRef } from "react";
import "../../styles/content.css";
import { Sidebar } from "../views/sidebar";
import email from "/email.svg";

function SessionStorage() {
  const [isCaptured, setisCaptured] = useState(false);
  const [renderOnce, setrenderOnce] = useState(false);
  const [pagerenderCount, setpagerenderCount] = useState(0);
  const currentDiv:any = useRef();
  useEffect(() => {
    renderLoadOnceState();
    {
      /* if renderOnce is true, render the function immediately, else  retuen null */
      renderOnce ? loadSessions() : null;
    }
  });

  async function loadSessions() {
    let count = 0;
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
            street: any;
            coordinates: any;
          }) => {
            let email = items.email;
            let providers = items.providers;
            let street = items.street;
            let coordinates = items.coordinates;
            console.log("ok");
            console.log(items);
            const createEl = document.createElement("div");
            createEl.innerHTML = `<div class="cp">
            <div class="cp-icon">
              <img src="" alt="icon" width=${40} id="image"/>
            </div>
            <div class="cp-provier">${items.providers}</div>
            <div class="cp-mail">${items.email}</div>
          </div>`
            currentDiv.current.appendChild(createEl)

            const image:any = document.querySelector("#image");
            if(items.providers === "Google") return image.src = "public/google.svg";
            if(items.providers === "Email") return image.src = "public/email.svg";
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
        <div className="f9" ref={currentDiv}>
          {/* <div className="cp">
            <div className="cp-icon">
              <img src="/dribble.svg" alt="icon" width={40} />
            </div>
            <div className="cp-provier">Dribble</div>
            <div className="cp-mail">info@mail.in</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default SessionStorage;
