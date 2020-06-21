import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import MovieIndex from './components/pages/MovieIndex'
import MovieDetails from './components/pages/MovieDetails'
import FavoriteList from './components/pages/FavoriteList'

function App() {
  return (
    <>
    <p> Maybe this </p>
    <BrowserRouter> 
      <Route path = '/movies' component = {MovieIndex}/>
      <Route path = '/movie' component = {MovieDetails}/>
      <Route path = '/favorites' component = {FavoriteList}/>
    </BrowserRouter>
    </>

  );
}

export default App;

/* <div>
    <h1>Hello World</h1>
    <MovieIndex/>
    <MovieDetails/>
    <FavoriteList/>
    </div> */
