import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "../components/hoc/auth/ProtectedRoute";

import Main from "./Main";
import Game from "./Game";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Main} />
      <Route path="/game" exact component={Game} />
      {/* <Route path="/" exact component={Main} /> */}
      <ProtectedRoute path="/parent" exact component={() => <div>some component here</div>} />
    </div>
  );
}

export default App;
