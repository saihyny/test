import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div className="App">
      <h2>Hello World</h2>
      {!changeText && <p>its good to see you</p>}
      {changeText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
}

export default App;
