import "../../styles/dash.css";
import { useEffect, useRef } from "react";

const dashboardComponent = () => {
  /* A reference to the div with the class name `_c9`. */
  const div = useRef();

  useEffect(() => {
    return () => {
      /* Fetching data from the API and setting the state of the component. */
      LoadContent();
    };
  }, []);

  const LoadContent = async () => {
    /* Setting the headers of the request. */
    let headersList = {
      "Content-Type": "application/json",
      method: "GET",
    };

    /* Fetching data from the API. */
    await fetch("http://localhost:5000/api/sessions", headersList)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        /**
         * The function takes an array of objects and returns an array of objects with the same keys
         * but with the values of the keys converted to strings.
         * </code>
         * @param {any} arr - any -&gt; this is the array that you want to map
         */
        const newArr = result.map(myFunction);

        function myFunction(arr: any) {
          /* Getting the current value of the ref. */
          const isCurrent = div.current;
          /* Creating a new div element. */
          const createDiv = document.createElement("div");
          createDiv.className = `${"content"}`
          createDiv.innerHTML = `<div class="_session_service">
          <i class="fa-solid fa-shield-keyhole"></i>
          ${arr.service}
        </div>
        <div class="_session_status">
          <i class="fa-regular fa-lock-keyhole"></i> ${arr.status}
        </div>
        <div class="_session_location">
          <i class="fa-solid fa-location-dot"></i> ${arr.location}
        </div>`;
        /* Appending the `createDiv` element to the `isCurrent` element. */
        isCurrent.appendChild(createDiv)
          /* Returning the array of objects. */
          return console.log(arr);
        }
      })
      /* Catching any errors that may occur during the fetching of data from the API. */
      .catch((error) => console.log("error"));
  };
  return (
    <div className="_dashboardComponent">
      <div className="_dash_content">
        <div className="cols">
          <div className="col-left">
            <div className="_app_name">App</div>
            <div className="list_components">
              <div className="_list">
                <div className="_list_icon">
                  <i className="fa-solid fa-grid-2"></i>
                </div>
                <div className="_list_text">Dashboard</div>
              </div>
              <div className="_list">
                <div className="_list_icon">
                  <i className="fa-solid fa-folder-gear"></i>
                </div>
                <div className="_list_text">Admin</div>
              </div>
              <div className="_list">
                <div className="_list_icon">
                  <i className="fa-solid fa-key"></i>
                </div>
                <div className="_list_text">Key Generate</div>
              </div>
              <div className="_list">
                <div className="_list_icon">
                  <i className="fa-solid fa-mask"></i>
                </div>
                <div className="_list_text">Sessions</div>
              </div>
              <div className="_list">
                <div className="_list_icon">
                  <i className="fa-solid fa-gear"></i>
                </div>
                <div className="_list_text">Settings</div>
              </div>
              <div className="_list">
                <div className="_list_icon">
                  <i className="fa-solid fa-wallet"></i>
                </div>
                <div className="_list_text">Go Pro</div>
              </div>
            </div>
          </div>
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
                  {/* <div className="_session_service">
                    <i className="fa-solid fa-shield-keyhole"></i>
                    {serviceData}
                  </div>
                  <div className="_session_status">
                    <i className="fa-regular fa-lock-keyhole"></i> {status}
                  </div>
                  <div className="_session_location">
                    <i className="fa-solid fa-location-dot"></i> {location}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default dashboardComponent;
