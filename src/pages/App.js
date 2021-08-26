import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "../components/hoc/auth/ProtectedRoute";
import {
  ROOT_PATH,
  CHOICE_GAME_PATH,

  COLOR_TYPE,
  ANIMAL_TYPE,
  NUMBER_TYPE,
  FOOD_TYPE,
  SOCIAL_TYPE,
  BODY_TYPE,
} from "../const";

import NavBar from "../components/NavBar/NavBar";
import GameArena from "./GameArena/GameArena";
import Game from "./Game";

const App = () => {
  return (
    <div className="min-h-screen bg-indigo-500">
      <NavBar />
      <Route path={ROOT_PATH} exact component={GameArena} />
      <Route path={CHOICE_GAME_PATH(COLOR_TYPE)} exact component={Game} />
      <ProtectedRoute path="/parent" exact component={() => <div>some component here</div>} />
    </div>
  );
}

export default App;
