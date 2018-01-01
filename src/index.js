import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';

const API_KEY = "AIzaSyCfcQhmSessmbt90yTCvAm9psZBp8YU1Gw";

const App = () => {
   return(
      <div>
         <h1>My Awesome Video Player</h1>
         <SearchBar />
      </div>
   );
};

ReactDOM.render(<App />, document.querySelector('.container'));