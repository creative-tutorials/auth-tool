import { FormContainer } from "../views/formContainer";

import { ErrorContainer } from "../views/errorContainer";
import { CheckValidation } from "../Auth/StatusValidation";
import "../../styles/sessionBlock.css";
import { useRef, useState } from "react";
function EmailComponent() {
  const [message, setMessage] = useState("");
  const [isContainerActive, setisContainerActive] = useState(false);
  const [isLoaderActive, setisLoaderActive] = useState(false);
  let status = CheckValidation();
  const EmailInputValue = useRef();
  const PasswordInputValue = useRef();
  const handleRequest = async () => {
    const emailValue = EmailInputValue.current.value;
    const passwordValue = PasswordInputValue.current.value;

    if (!emailValue || !passwordValue) {
      status.message = "Error";
    } else {
      ValidateEmailInput();
    }

    function ValidateEmailInput() {
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const prefix = ".";
      if (emailValue.match(validRegex) && emailValue.includes(prefix)) {
        status.message = "Success";
        setMessage((message) => "");
      } else {
        status.message = "Error";
      }
    }

    if (status.message === "Success") {
      if (navigator.geolocation) return navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
      function successFunction(position: any) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        
      const objData = {
        service: emailValue,
        status: null,
        coordinates: {
          longitude: long,
          latitude: lat,
      },
      street: "testing"
      };
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objData),
      };
      setisLoaderActive(true);

      setTimeout(async () => {
        try {
          const response = await fetch(
            "http://localhost:4000/session/add",
            options
          );
          console.log(response);
          if (response.status === 401) {
            setisContainerActive(true);
            setisLoaderActive(true);
            setMessage((message) => response.statusText);
          }

          if (response.ok) {
            const result = await response.json();
            console.log(result);
            setisLoaderActive(false);
            setMessage((message) => "Data Created Sucessfully");
          }
        } catch (err: any) {
          console.error(err);
          setisContainerActive(false);
          setMessage((message) => err);
        }
        setisLoaderActive(false);
      }, 3000);
    }
    }
    if (status.message === "Error") {
      setMessage(
        (message) =>
          "Couldn't complete request, check your inputs and try again"
      );
      setisContainerActive(true);
      return console.error(
        "Couldn't complete request, check your inputs and try again"
      );
    }
    function errorFunction(message: "You denied permission") {
      console.log("Error: " + message)
    }
    /* Logging the status object to the console. */
    console.log(status);
  };

  return (
    <div id="firstBlock">
      <div id="blockContainer">
        <div id="text-block">
          <h2>Add your session using Email & Password</h2>
        </div>
        <FormContainer
          EmailInputValue={EmailInputValue}
          PasswordInputValue={PasswordInputValue}
          handleRequest={handleRequest}
          isLoaderActive={isLoaderActive}
        />
      </div>
      <ErrorContainer isContainerActive={isContainerActive} message={message} />
    </div>
  );
}
export default EmailComponent;
