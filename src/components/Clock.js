import React from "react";

function Clock({ className = "", minutes = 20, seconds = 48 }) {
  return (
    <h2 className={"clock " + className}>
      Pozostało &nbsp; 
      <div className={"clock__minutes"}>{minutes}</div>
      <div className={"clock__separator"}>:</div>
      <div className={"clock__seconds"}>{seconds}</div>
      
    </h2>
  );
}

export default Clock;
