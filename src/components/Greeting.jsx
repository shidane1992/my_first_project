import React, { Fragment } from "react";
function Greeting(props) {
  return (
    <div style={{ backgroundColor: "pink", color: "black" , border: "1px solid black"}}>
      <h1>
        Hello, {props.name} {props.surname}!
      </h1>
      <h2>this text was not there and i added a new coomit h2 </h2>
    </div>
  );
}

export default Greeting;
