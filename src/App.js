import React, { useEffect } from "react";
import { Route, useLocation, useHistory } from "react-router-dom";
import axios from "axios";

import {
  Home,
  Detail,
  Update,
  Create,
  CreateItems,
  AddImages,
  FAQS,
  Register,
  Login,
} from "./pages/index";
import { NavBar, LateralBar } from "./components/index";

axios.defaults.baseURL = "https://back-production-c55d.up.railway.app/";

function App() {
  const location = useLocation();
  const history = useHistory();

  const user = window.localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user]);

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      {location.pathname !== "/" && <LateralBar />}
      <Route exact path="/">
        <Login />
      </Route>

      <Route exact path="/home">
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

      <Route exact path="/register">
        <Register />
      </Route>

      {/* <Route exact path="/login/user">
        <Login />
      </Route> */}
    </div>
  );
}

export default App;
