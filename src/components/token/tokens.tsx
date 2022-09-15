import "../../styles/token_component.css";
import { useRef, useEffect, useState } from "react";
function TokenComponent() {
    const [renderToken, setrenderToken] = useState(false)
  useEffect(() => {
    {
        renderToken ? GenerateToken() : null
    }
    Load();
  });

  const tokenInputValue: any = useRef();
  const GenerateToken = async () => {
    try {
      const response = await fetch("http://localhost:4000/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        tokenInputValue.current.value = result.your_token;
      }
    } catch (err) {
      console.error(err);
    }
  };
  const Load = () => {
    setrenderToken(true)
    console.log("load")
  }
  return (
    <div className="a6">
      <div className="g3">
        <input type="text" placeholder="Your Token" ref={tokenInputValue} />
        <button onClick={GenerateToken}>
          <i className="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>
    </div>
  );
}
export default TokenComponent;
