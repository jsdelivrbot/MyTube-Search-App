import React from 'react';
import VideoItem from './videoItem';

const VideoList = (props) => {

   const videoList = props.videos.map(video => <VideoItem key = {video.etag} video = {video} />);

   return(
      <ul className = 'col-md-4 list-group'>
         {videoList}
      </ul>
   );
};

export default VideoList;