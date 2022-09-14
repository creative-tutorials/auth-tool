import { FormContainer } from "../views/formContainer";
import ValidationComponent from "../functions/validate";
import { ErrorContainer } from "../views/errorContainer";
import { CheckValidation } from "../Auth/StatusValidation";
import "../../styles/form.css";
import { useRef, useState } from "react";
import { sendDataToAPI } from "../functions/checkReqData";
function EmailComponent() {
  const [message, setMessage] = useState("");
  const [isContainerActive, setisContainerActive] = useState(false);
  const [isLoaderActive, setisLoaderActive] = useState(false);
  const [isAllowed, setisAllowed] = useState(false)
  let status = CheckValidation();
  const EmailInputValue: any = useRef();
  const PasswordInputValue: any = useRef();
  const ProviderInputValue: any = useRef()
  const handleRequest = async () => {
    const emailValue = EmailInputValue.current.value;
    const passwordValue = PasswordInputValue.current.value;
    const providerinput = ProviderInputValue.current.value;

    if (!emailValue || !passwordValue || !providerinput) {
      setisAllowed(false);
    } else {
      /* It's a function that checks if the request is valid. */
      let ValidateEmailInput = ValidationComponent({
        emailValue,
        message,
        setMessage,
        setisAllowed,
        isAllowed,
      });
      ValidateEmailInput();
      setisAllowed(true);
    }

    if (isAllowed) {
      if (navigator.geolocation)
        return navigator.geolocation.getCurrentPosition(
          successFunction,
          errorFunction
        );
      function successFunction(position: any) {
        /* It's a function that sends the requested data to the API. */
        sendDataToAPI(
          position,
          emailValue,
          passwordValue,
          providerinput,
          setisLoaderActive,
          setisContainerActive,
          setMessage
        );
      }
    }
    if (!isAllowed) {
      setMessage(
        (message) =>
          "Couldn't complete request, check your inputs and try again"
      );
      setisContainerActive(true);
      return console.error(
        "Couldn't complete request, check your inputs and try again"
      );
    }
    function errorFunction() {
      console.log("You denied permission to access your location");
    }
    /* Logging the status object to the console. */
    console.log("status");
  };

  return (
    <div id="firstBlock">
      <div id="blockContainer">
        <div id="text-block">
          <h2>Hi There!</h2>
          <p id="small-text">Create new session by providing the email address, password and provider</p>
        </div>
        <FormContainer
          EmailInputValue={EmailInputValue}
          PasswordInputValue={PasswordInputValue}
          ProviderInputValue={ProviderInputValue}
          handleRequest={handleRequest}
          isLoaderActive={isLoaderActive}
        />
      </div>
      <ErrorContainer isContainerActive={isContainerActive} message={message} />
    </div>
  );
}
export default EmailComponent;
