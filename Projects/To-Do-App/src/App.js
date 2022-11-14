import React from "react";
import MainContain from "./pages/mainContain";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogScreen from "./pages/blogScreen";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainContain />
          </Route>
          <Route path="/home/:id">
            <BlogScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
