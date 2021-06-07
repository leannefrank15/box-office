import React from 'react';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact={true} path="/">

        this is the home page

      </Route>

      <Route exact={true} path="/starred">

        this is starred

      </Route>

      <Route>
        error 404 page not found
      </Route>

    </Switch>
  );
}

export default App;
