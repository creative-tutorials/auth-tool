import { Sidebar } from "../views/sidebar";
import { AddSession } from "../AddSession/addSession";
import "../../styles/dash.css";
import "../../styles/sessionDiv.css";
import email from "/email.svg";
import facebook from "/facebook-logo-2019.svg";
import google from "/google.svg";
import twitter from "/twitter.svg";
import { useState, useEffect, useRef } from "react";

const dashboardComponent = () => {
  const [isRendered, setisRendered] = useState(false);
  let isLoaded = false;
  /* A reference to the div with the class name `_c9`. */
  const div = useRef();

  useEffect(() => {
    return () => {
      LoadContent();
      /* Fetching data from the API and setting the state of the component. */
    };
  }, []);

  const LoadContent = async () => {
    isLoaded = true;
    /* Setting the headers of the request. */
    let headersList = {
      "Content-Type": "application/json",
      method: "GET",
    };
    if (isLoaded) {
      /* Fetching data from the API. */
      await fetch(
        `http://localhost:4000/api/sessions`,
        headersList
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          const sessionObj = result;
          /**
           * The function takes an array of objects and returns an array of objects with the same keys
           * but with the values of the keys converted to strings.
           * </code>
           * @param {any} arr - any -&gt; this is the array that you want to map
           */
          const newArr = sessionObj.map(myFunction);

          function myFunction(arr: any) {
            const createDiv = document.createElement("div");
            /* Getting the current value of the ref. */
            const isCurrent = div.current;
            /* Creating a new div element. */
            createDiv.className = `${"content"}`;
            createDiv.innerHTML = `<div class="_session_service">
            <i class="fa-solid fa-shield-keyhole"></i>
            ${arr.service}
          </div>
          <div class="_session_status">
            <i class="fa-regular fa-lock-keyhole"></i> ${arr.status}
          </div>
          <div class="_session_location">
            <i class="fa-solid fa-location-dot"></i> ${arr.street}
          </div>`;
            /* Appending the `createDiv` element to the `isCurrent` element. */
            isCurrent.appendChild(createDiv);
            /* Returning the array of objects. */
            return console.log(arr);
          }
        })
        /* Catching any errors that may occur during the fetching of data from the API. */
        .catch((error) => {
          console.log(error);
          isLoaded = false;
        });
    }
    if (!isLoaded) {
      return console.error("Error loading content");
    }
    console.log("loadState", isLoaded);
  };
  const toggleAddButton = () => {
    /* Setting the value of the key `class` to `active`. */
    localStorage.setItem("class", "active");
    console.log("Loaded");
    const getClassEvent = localStorage.getItem("class");

    if (getClassEvent) {
      /* Checking if the value of the key `class` is equal to `active`. */
      setisRendered(true);
    }
    if (!getClassEvent) {
      setisRendered(false);
    }
    console.log(isRendered);
  };

  return (
    <div className="_dashboardComponent">
      <div className="_dash_content">
        <div className="cols">
          <Sidebar />
          <div className="col-right_s1">
            <div className="_s1_tp">
              <div className="_tp_greet">
                Welcome <div id="user">User</div>
              </div>
            </div>
            <div className="_session_">
              <div className="session_header">
                <h4>Manage all your logins in real-time</h4>
              </div>
              <div className="_userSession">
                <div className="_session_table">
                  <div id="name">Service</div>
                  <div id="name">Status</div>
                  <div id="name">Location</div>
                </div>
                <div className="_c9" ref={div}>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="addButton">
        <button id="add_session" onClick={toggleAddButton}>
          Add New Session
        </button>
      </div>
      <AddSession
        email={email}
        facebook={facebook}
        google={google}
        twitter={twitter}
        text={"Add new Session"}
        Rendered={isRendered}
      />
    </div>
  );
};
export default dashboardComponent;
