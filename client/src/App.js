import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books/Books";

function App() {
  return (
    <div className="App">
      <Books></Books>
    </div>
  );
}

export default App;
