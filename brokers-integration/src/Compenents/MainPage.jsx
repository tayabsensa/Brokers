import React, { useState } from "react";
import TradeStation from "./TradeStation";
import TradierBrokerage from "./TradierBrokerage";
import "./global.css";

function MainPage() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      document.body.classList.add("light-theme");
      setTheme("light");
    } else {
      document.body.classList.remove("light-theme");
      setTheme("dark");
    }
  };

  return (
    <div>
      {/* <button onClick={toggleTheme} style={{ padding: "10px", margin: "20px" }}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button> */}
      <div className="cards-container">
        <TradierBrokerage />
        <TradeStation />
      </div>
    </div>
  );
}

export default MainPage;