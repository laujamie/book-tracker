import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books/Books";
import Details from "./pages/Details/Details";
import NoMatch from "./pages/404/404";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Books}></Route>
            <Route exact path="/books" component={Books}></Route>
            <Route exact path="/books/:id" component={Details}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
