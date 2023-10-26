import "./App.css";
import Members from "./components/Members";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");
  return (
    <div className="App">
      <header>
        <div className="left-col">
          <h1 className="title">IT Club</h1>
          <p>
            Welcome to the one most rated website that can transform you from
            novice to pro react developer
          </p>
          <button className="btn"> Sign up now for early access</button>
        </div>
        <div className="right-col"></div>
      </header>
      <div className="member-sect">
        <h3>Meet our esteemed team members</h3>
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
        </>
        <Members name="Kashushure" role="Team Lead" />
        <Members name="Abdulaziz" role={role} />
        <Members name="Abby" />
      </div>
    </div>
  );
}

export default App;
