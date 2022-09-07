import "../../styles/dash.css";

const dashboardComponent = () => {
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
                  <div id="name">Servie</div>
                  <div id="name">Status</div>
                  <div id="name">Location</div>
                </div>
                <div className="_c9">
                  <div className="_session_service">
                    <i className="fa-solid fa-shield-keyhole"></i> Facebook
                  </div>
                  <div className="_session_status">
                    <i className="fa-light fa-lock-keyhole"></i> Logged in 2hrs
                    ago
                  </div>
                  <div className="_session_location">
                    <i className="fa-solid fa-location-dot"></i> United States,
                    New York
                  </div>
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
