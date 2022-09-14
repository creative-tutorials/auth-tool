import React from "react";
import "../../styles/content.css";
import { useEffect, useState } from "react";
function Klip(props: any) {
  const [count, setcount] = useState(0);
  const [renderfunction, setrenderfunction] = useState(false);
  useEffect(() => {
    HelloRUn();
    {
      renderfunction ? RUn() : null;
    }
    return () => {
      console.log(count);
      // second
    };
  });

  const RUn = () => {
    const f9: any = document.querySelector(".f9");
    const createElement = document.createElement("div");

    createElement.innerHTML = `<div class="cp">
    <div class="cp-icon">
      <img src="/lock.svg" alt="icon" width=${40} />
      <div class="cp-provier">${props.email}</div>
    </div>
    <div class="cp-mail">${props.sessionTime}</div>
    <button id="req-password">Request Password</button>
  </div>`;
    createElement.id = "cp-create";
    f9.appendChild(createElement);
    const click: any = document.getElementById("req-password");
    click.onclick = async () => {
      try {
        const response = await fetch("http://localhost:4000/request/pswrd", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: props.email,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
        }
      } catch (err) {
        console.error(err);
      }
    };
  };

  const HelloRUn = () => {
    const interval = setInterval(() => {
      setcount(1);
    }, 100);
    if (count === 1) {
      console.log(count);
      return setrenderfunction(true);
    }
  };

  return <div className="elApp"></div>;
}
export default Klip;
