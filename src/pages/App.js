import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from '../components/hoc/auth/ProtectedRoute';
import {
  ROOT_PATH,
  CHOICE_GAME_PATH_GENERAL
} from '../const';

import NavBar from '../components/NavBar/NavBar';
import GameArena from './GameArena/GameArena';
import Game from './Game';

// todo: parent section is WIP
const App = () => (
  <div className="min-h-screen bg-indigo-500">
    <NavBar />
    <Route path={ROOT_PATH} exact component={GameArena} />
    <ProtectedRoute path={CHOICE_GAME_PATH_GENERAL} exact component={Game} />
    <ProtectedRoute path="/parent" exact component={() => <div>some component here eventually</div>} />
  </div>
);

export default App;
