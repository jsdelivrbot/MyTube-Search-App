import React from 'react';

const VideoItem = ({video}) => {

   const {snippet} = video;
   // Get thumbnail & title out from received data from YouTube
   const imageThumbnail = snippet.thumbnails.default.url;
   const title = snippet.title;

   return(
      <li className = 'list-group-item'>
         <div className = 'video-list media'>
            <div className = 'media-left'>
               <img className = 'media-object' src = {imageThumbnail} />
            </div>

            <div className = 'media-body'>
               <div className = 'media-heading'>
                  {title}
               </div>
            </div>

         </div>
      </li>
   );
};

export default VideoItem;  