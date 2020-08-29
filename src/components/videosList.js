import React from 'react'
import ReactPlayer from 'react-player';

const VideosList = (props) => { 
    return (
	    <div className='container mt-5'>
	    	<h3 className='text-heading'>Videos</h3>
	    	<div className="row">
	    	{props.videosData.map(video=>{
	    		return <div className="col-lg-4">
					<video width="320" height="240" controls>
					  <source src={video.url} type="video/mp4" />  
					</video>
				</div>
	    	})}
		      
			</div>
	    </div>
	)
}

export default VideosList;