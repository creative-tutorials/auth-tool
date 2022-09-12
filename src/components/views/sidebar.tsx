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
          <div className="_list_text"><a href="/dashboard">Dashboard</a></div>
        </div>
        <div className="_list">
          <div className="_list_icon">
            <i className="fa-solid fa-folder-gear"></i>
          </div>
          <div className="_list_text"><a href="/admin">Admin</a></div>
        </div>
        <div className="_list">
          <div className="_list_icon">
            <i className="fa-solid fa-key"></i>
          </div>
          <div className="_list_text"><a href="/tokens">Key Generate</a></div>
        </div>
        <div className="_list">
          <div className="_list_icon">
            <i className="fa-solid fa-mask"></i>
          </div>
          <div className="_list_text"><a href="/sessions">Sessions</a></div>
        </div>
        <div className="_list">
          <div className="_list_icon">
            <i className="fa-solid fa-gear"></i>
          </div>
          <div className="_list_text"><a href="/settings">Settings</a></div>
        </div>
        <div className="_list">
          <div className="_list_icon">
            <i className="fa-solid fa-wallet"></i>
          </div>
          <div className="_list_text"><a href="/payment">Go Pro</a></div>
        </div>
      </div>
    </div>
  );
}
