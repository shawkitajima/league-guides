import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import GuideEditorPage from './pages/GuideEditorPage/GuideEditorPage';
import ChampionDetail from './pages/ChampionDetail/ChampionDetail';
import AllChampionsPage from './pages/AllChampionsPage/AllChampionsPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/guides/edit/:champ">
            <GuideEditorPage />
        </Route>
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
