import React from 'react';
import ReactPlayer from 'react-player';

import VideosList from '../components/videosList'
import axios from 'axios'
import data from '../json/videos.json'

class VideosListContainer extends React.Component {

	state={
		videosData : data
	}

	render() { 
		return (
			<VideosList videosData={this.state.videosData}/>
		);
	}
}

export default VideosListContainer;
