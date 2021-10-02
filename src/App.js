import React from 'react'
import Home from './Pages/Home'
import Details from './Pages/Details';
import {Switch, Route,useLocation} from 'react-router-dom'


import Search from './Pages/Search';


function App() {
  const location = useLocation()
  return (
      <div>

        <Switch location={location}>
          <Route exact path='/movieflix'>
            <Home/>
          </Route>
          <Route path="movieflix/movie/search">
            <Search/>
          </Route>
          <Route path='movieflix/movie/details/:movieId'>
            <Details/>
          </Route>
        </Switch>

        
      </div>
  );
}

export default App;

