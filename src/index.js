import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = "AIzaSyCfcQhmSessmbt90yTCvAm9psZBp8YU1Gw";


class App extends Component {
   constructor(props) {
      super(props);
      this.state = { videos: [] };

   YTSearch({ key: API_KEY, term: "iphone X" }, videos =>
      this.setState({ videos })
   );
}


   render() {
      return(
         <div>
            <h1>My Awesome Video Player</h1>
            <SearchBar />
            <VideoDetail video = {this.state.videos[0]}/>
            <VideoList videos = {this.state.videos} />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.querySelector('.container'));