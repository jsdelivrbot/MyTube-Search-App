import React from 'react';
import VideoItem from './videoItem';

const VideoList = (props) => {

   const videoList = props.videos.map(video => <VideoItem key = {video.etag} video = {video} />);

   return(
      //col-md-4 is bootstrap style to float videoList to the left
      <ul className = 'col-md-4 list-group'>
         {videoList}
      </ul>
   );
};

export default VideoList;