import React from 'react'; 

const VideoDetail = ({video}) => {
	//to add a check if there is a video or not, other if the video is still loading, react will throw an error as it could 
	//not detect any videos 
	if (!video) {
		return <div>Loading...</div>
	}
	const videoId = video.id.videoId; 
	const url = `https://www.youtube.com/embed/${videoId}`; 
	return (
		<div className="video-details col-md-8">

		  <div className="embed-responsive embed-responsive-16by9"> 
		  	<iframe className="embed-responsive-item" src={url} ></iframe> 
		  </div> 

		  <div className="details">
		  	<div>{video.snippet.title}</div>
		  	<div>{video.snippet.description}</div>
		  </div> 

		</div>
		); 
}; 

export default VideoDetail; 
