import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { Home, Detail, Update } from "./pages/index";
import { NavBar, LateralBar } from "./components/index";

axios.defaults.baseURL = "https://back-production-c55d.up.railway.app/";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <LateralBar></LateralBar>

      <Route exact path="/">
        <Home />
      </Route>

      <Route
        path="/detail/:id"
        render={({ match }) => <Detail id={match.params.id} />}
      />

      <Route
        path="/update/:id"
        render={({ match }) => <Update id={match.params.id} />}
      />
    </div>
  );
}

export default App;
