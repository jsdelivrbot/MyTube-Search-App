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
      this.state = { 
         videos: [],
         selectedVideo: null,
         term: ''
      };

      //first search when the app is loaded
      this.videoSearch('iphone');
   }  

   videoSearch(term) {
      YTSearch({ key: API_KEY, term}, videos =>
         this.setState({ 
            videos: videos,
            selectedVideo: videos[0],
         })
      );
   }


   render() {
      return(
         <div>
            <div className = "header">
               <h1 className = "title" >MyTube</h1>
               <SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
            </div>
            <VideoDetail video = {this.state.selectedVideo}/>
            <VideoList 
               videos = {this.state.videos} 
               onVideoSelect = {selectedVideo => this.setState({ selectedVideo })}
            />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.querySelector('.container'));