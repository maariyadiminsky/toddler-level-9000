import React from "react";
import { Route } from "react-router-dom";

import Main from "../pages/Main";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Main} />
    </div>
  );
}

export default App;
