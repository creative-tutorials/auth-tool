import { CheckValidation } from "../Auth/StatusValidation";
import "../../styles/sessionBlock.css";
import { useRef, useState } from "react";
function EmailComponent() {
  let status = CheckValidation();
  const EmailInputValue = useRef();
  const PasswordInputValue = useRef();
  const handleRequest = async () => {
    const emailValue = EmailInputValue.current;
    const passwordValue = PasswordInputValue.current;

    if (!emailValue.value || !passwordValue.value) {
      status.message = "Error";
    } else {
      MoreValidation();
    }

    function MoreValidation() {
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const prefix = ".";
      if (
        emailValue.value.match(validRegex) &&
        emailValue.value.includes(prefix)
      ) {
        status.message = "Success";
      } else {
        status.message = "Error";
      }
    }

    if (status.message === "Success") {
      const objData = {
        service: emailValue.value,
        status: null,
        location: null,
      }
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(objData)
      };
      
      await fetch('http://localhost:4000/session/add', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    if (status.message === "Error") {
      return console.error("Returned Error");
    }
    console.log(status);
  };

  return (
    <div id="firstBlock">
      <div id="blockContainer">
        <div id="text-block">
          <h2>Add your session using Email & Password</h2>
        </div>
        <div className="form-container">
          <div id="input_box">
            <input
              type="text"
              placeholder="Enter your email address"
              ref={EmailInputValue}
            />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div id="input_box">
            <input
              type="password"
              placeholder="Enter your password"
              ref={PasswordInputValue}
            />
            <i className="fa-solid fa-lock"></i>
          </div>
          <div id="button-container">
            <button onClick={handleRequest}>
              <div className="loadingio-spinner-rolling-qi1fv3910k">
                <div className="ldio-mgbhxi1hx8k">
                  <div></div>
                </div>
              </div>
              <span id="button-text">Submit Request</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmailComponent;
