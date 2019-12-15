import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/header";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInput = value => {
    setName(value);
    dispatch({ type: "NAME", newValue: value });
  };

  return (
    <div className="App">
      <Header></Header>
      <div>
        <input onChange={e => handleInput(e.target.value)} value={name}></input>
      </div>
    </div>
  );
}

export default App;
