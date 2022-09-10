import React from "react";
export function ErrorContainer({ isContainerActive, message }: any) {
  return (
    <div id={isContainerActive ? "error-container" : "inactive"}>
      <span id="error-message">{message}</span>
    </div>
  );
}
