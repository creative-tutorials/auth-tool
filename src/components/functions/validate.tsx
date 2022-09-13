export default function ValidationComponent({
  emailValue,
  message,
  setMessage,
  setisAllowed,
  isAllowed,
}: any) {
  return function ValidateEmailInput() {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const prefix = ".";
    if (emailValue.match(validRegex) && emailValue.includes(prefix)) {
      setisAllowed(true);
      setMessage((message: any) => "");
    } else {
      setisAllowed(false);
    }
  };
}
