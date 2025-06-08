import { useState } from "react"

function NameForm() {
    const [name, setName] = useState("");
    const handleChange = (e) =>{
        setName(e.target.value);
    };

  return (
    <div style={{padding :"20px", backgroundColor: "yellow", color:"blue", margin: "20px", border: "2px solid red", borderRadius: "10px"}}>
      <h2>hello {name || "stranger"}!</h2>
      <input type="text" 
      value={name}
      onChange={handleChange}
      placeholder="Enter your name"
      />
    </div>
  )
}

export default NameForm
