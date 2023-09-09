import React from 'react'
import Home from './Pages/Home'
import Details from './Pages/Details';
import {Switch, Route} from 'react-router-dom'
import Search from './Pages/Search';
import Header from './Components/Header';

function App() {

  return (
    <>
    <Header/>
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
    </>
  );
}

export default App;

