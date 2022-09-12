import { Header } from "../views/header";
import { useEffect, useState } from "react";
import "../../styles/content.css";
import { Sidebar } from "../views/sidebar";
function SessionStorage() {
  const [isCaptured, setisCaptured] = useState(false);
  useEffect(() => {
    // loadSessions();
  });

  console.log(isCaptured);
  return (
    <div className="container-page">
      <Header
        text1={"Dashboard"}
        text2={"Admin"}
        text3={"Key Generate"}
        text4={"Sessions"}
        text5={"Settings"}
        text6={"Go Pro"}
      />
      <div className="view-page">
        <h3>Recently Added</h3>
        <div className="f9">
          <div className="cp">
            <div className="cp-icon">
              <img src="/dribble.svg" alt="icon" width={40}/>
            </div>
            <div className="cp-provier">Dribble</div>
            <div className="cp-mail">info@mail.in</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SessionStorage;
