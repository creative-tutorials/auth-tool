export function sendDataToAPI(
  position: any,
  emailValue: any,
  setisLoaderActive: any,
  setisContainerActive: any,
  setMessage: any
) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  const objData = {
    email: emailValue,
    providers: "Email",
    loginTime: null,
    coordinates: {
      longitude: long,
      latitude: lat,
    },
    street: "testing",
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
        setMessage((message: any) => response.statusText);
      }

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setisLoaderActive(false);
        setMessage((message: any) => "Data Created Sucessfully");
      }
    } catch (err: any) {
      console.error(err);
      setisContainerActive(false);
      setMessage((message: any) => err);
    }
    setisLoaderActive(false);
  }, 3000);
}
