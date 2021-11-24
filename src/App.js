import React from 'react'
import Home from './Pages/Home'
import Details from './Pages/Details';
import {Switch, Route} from 'react-router-dom'


import Search from './Pages/Search';


function App() {

  return (
      <div>
        <Switch>
        <Route exact path='/'>
              <Home/>
          </Route>
          <Route path="/search">
              <Search/>
          </Route>
          <Route path='/movie/details/:movieId'>
            <Details/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;

