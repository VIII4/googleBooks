import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Banner from "./components/Banner";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Banner />
        <Switch>
          {/* TO DO: Route to search page */}
          <Route exact path="/" component={Search} />
          {/* TO DO: Route to saved page */}
          <Route exact path="/saved" component={Books} />
          {/* no match */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
