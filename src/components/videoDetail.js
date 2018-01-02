import React from 'react';

const VideoDetail = ({video}) => {

   //Loading when waiting for data to be fetched
   if(!video) {
      return <div>Loading...</div>;
   }

   //Render now playing frame when data is already fetched
   console.log(video); //display data on console

   const videoId = video.id.videoId;
   const url = `https://www.youtube.com/embed/${videoId}`;

   return <div className="video-detail col-md-8">
       <div className="embed-responsive embed-responsive-16by9 ">
         <iframe className="embed-responsive-item video-playing" src={url} />
       </div>

       <div className="details">
         <div className = "video-title">{video.snippet.title}</div>
         <div className = "video-description">{video.snippet.description}</div>
       </div>
     </div>;
};

export default VideoDetail;