import { Sidebar } from "../views/sidebar";
import { AddSession } from "../AddSession/addSession";
import "../../styles/dash.css";
import "../../styles/modal.css";
import email from "/email.svg";
import facebook from "/facebook-logo-2019.svg";
import google from "/google.svg";
import twitter from "/twitter.svg";
import { useState, useEffect, useRef } from "react";

const dashboardComponent = () => {
  const [isRendered, setisRendered] = useState(false);
  let isLoaded = false;
  /* A reference to the div with the class name `_c9`. */
  const div: any = useRef();

  useEffect(() => {
    return () => {
      LoadContent();
      /* Fetching data from the API and setting the state of the component. */
    };
  }, []);

  const LoadContent = async () => {
    isLoaded = true;
    if (isLoaded) {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const response = await fetch(
          "http://localhost:4000/api/sessions",
          options
        );

        if (response.ok) {
          const result = await response.json();
          // console.log(result);
          // map through the result
          const reslt = result;

          /* Mapping through the result of the API call. */
          const mapItems = reslt.map(
            (item: {
              email: any;
              providers: any;
              loginTime: any;
              street: any;
              coordinates: any;
            }) => {
              /**
               * The function Opt is a constructor function that takes in 5 parameters and assigns them
               * to the properties of the object that is being created.
               * @param {any}  - email -&gt; email of the user
               * @param {any} email - string
               * @param {any} provider - "google"
               * @param {any} loginTime - "2019-01-01T00:00:00.000Z"
               * @param {any} street - is the street name
               * @param {any} coordinates - [longitude, latitude]
               */
              function Opt(
                this: any,
                email: any,
                provider: any,
                loginTime: any,
                street: any,
                coordinates: any
              ) {
                this.userEmail = email;
                (this.providers = provider),
                  (this.logintime = loginTime),
                  (this.area = street),
                  (this.coord = coordinates);
              }
              const myoptions = new (Opt as any)(
                item.email,
                item.providers,
                item.loginTime,
                item.street,
                item.coordinates
              );
              console.log(myoptions);
              const _c9: any = div.current;
              const table = document.createElement("table");
              _c9.appendChild(table);
              table.innerHTML = `<tr> 
              <td>${myoptions.providers}</td>
              <td>${myoptions.logintime}</td>
              <td>${myoptions.area}</td>
            </tr>`;
              /* Checking if the value of the key `providers` is undefined. */
              const checkProvider = myoptions.providers;
              if (checkProvider === undefined) {
                console.warn(`Provider ${checkProvider} not found`);
              } else {
                console.info(`Provider ${checkProvider} found`);
              }
            }
          );
        }
      } catch (err) {
        console.error(err);
      }
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
                  <div id="name">Latest sessions</div>
                  <a href="/sessions" id="view">
                    View All
                  </a>
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
