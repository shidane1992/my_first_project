import React from "react";

const Clicker = () => {
  const nasir = () => {
    alert("Hello, World!");
  };
  return (
    <div style={{color:"red", backgroundColor:"blue", padding: "20px", margin: "20px", border: "2px solid black" , borderRadius: "10px"}} onClick={nasir}>
      <button onClick={nasir}>CLICK</button>
    </div>
  );
};

export default Clicker;
