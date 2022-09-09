import React from "react";
export function Sidebar({}) {
  return (
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
  );
}
