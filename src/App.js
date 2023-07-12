import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import {
  Home,
  Detail,
  Update,
  Create,
  CreateItems,
  AddImages,
  FAQS,
} from "./pages/index";
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

      <Route exact path="/create">
        <Create />
      </Route>

      <Route exact path="/create/items">
        <CreateItems />
      </Route>

      <Route exact path="/add/images">
        <AddImages />
      </Route>

      <Route exact path="/create/faqs">
        <FAQS />
      </Route>
    </div>
  );
}

export default App;
