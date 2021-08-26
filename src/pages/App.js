import React from "react";
import { Route } from "react-router-dom";

import ProtectedRoute from "../components/hoc/auth/ProtectedRoute";
import { useGetLocalStorageData } from "../hooks/localStorage";

import NavBar from "../components/NavBar/NavBar";
import GameArena from "./GameArena/GameArena";
import Game from "./Game";

const App = () => {
    // gets localStorage when userId exists
    useGetLocalStorageData();

  return (
    <div className="min-h-screen bg-indigo-500">
      <NavBar />
      <Route path="/" exact component={GameArena} />
      <Route path="/games" exact component={Game} />
      <ProtectedRoute path="/parent" exact component={() => <div>some component here</div>} />
    </div>
  );
}

export default App;
