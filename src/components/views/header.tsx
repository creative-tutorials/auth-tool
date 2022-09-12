import React from "react";
export function Header({text1, text2, text3, text4, text5, text6}:any) {
  return (
    <header>
      <div className="header_content">
        <div className="text">App</div>
        <div className="lkn">
          <div className="links">
            <div className="links_icon">
              <i className="fa-solid fa-grid-2"></i>
            </div>
            <div className="link">
              <a href="/dashboard">{text1}</a>
            </div>
          </div>
          <div className="links">
            <div className="links_icon">
              <i className="fa-solid fa-folder-gear"></i>
            </div>
            <div className="link">
              <a href="/admin">{text2}</a>
            </div>
          </div>
          <div className="links">
            <div className="links_icon">
              <i className="fa-solid fa-key"></i>
            </div>
            <div className="link">
              <a href="/tokens">{text3}</a>
            </div>
          </div>
          <div className="links">
            <div className="links_icon">
              <i className="fa-solid fa-mask"></i>
            </div>
            <div className="link">
              <a href="/sessions">{text4}</a>
            </div>
          </div>
          <div className="links">
            <div className="links_icon">
              <i className="fa-solid fa-gear"></i>
            </div>
            <div className="link">
              <a href="/settings">{text5}</a>
            </div>
          </div>
          <div className="links">
            <div className="links_icon">
              <i className="fa-solid fa-wallet"></i>
            </div>
            <div className="link">
              <a href="/payment">{text6}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
