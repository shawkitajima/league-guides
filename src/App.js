import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import AllChampionsPage from './pages/AllChampionsPage/AllChampionsPage';
import ChampionDetail from './pages/ChampionDetail/ChampionDetail';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/:champ">
            <ChampionDetail />
        </Route>
        <Route exact path="/">
          <AllChampionsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
