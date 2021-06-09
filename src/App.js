import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Show from './pages/Show'
import Starred from './pages/Starred'

function App() {

  return (
    
    <Switch>
      <Route exact={true} path="/">

        < Home />

      </Route>

      <Route exact={true} path="/starred">

        <Starred />

      </Route>

      <Route exact={true} path="/show/:id">
          <Show/>
      </Route>

    </Switch>
    
  );
}

export default App;
