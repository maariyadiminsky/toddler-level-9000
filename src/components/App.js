import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "./hoc/auth/ProtectedRoute";

import Main from "../pages/Main";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Main} />
      <ProtectedRoute path="/parent" exact component={() => <div>some component here</div>} />
    </div>
  );
}

export default App;
