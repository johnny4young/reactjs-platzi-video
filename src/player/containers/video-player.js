import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import VideoPlayerControls from '../components/video-player-controls'

import Formating from '../../utilities/formating'

class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0,
		currentTime: 0
	}

	handleToggleClick = () => {
		this.setState( (prevState) =>( {
			pause: !prevState.pause
		}))
	}

	componentDidMount (){
		this.setState({
			pause: (!this.props.autoplay)
		})
	}

	handleLoadedMetadata = event => {
		this.video = event.target;
		this.setState({
			duration: Formating.formattedTime(this.video.duration.toString())
		});

	}

	handleTimeUpdate = event => {
		console.log(this.video.currentTime);
		this.setState({
			currentTime: Formating.formattedTime(this.video.currentTime.toString())
		})
	}

	render(){
		return (
			<VideoPlayerLayout>
				<Title 
				title="feo"/>
				<VideoPlayerControls>
					<PlayPause pause={this.state.pause} handleClick={this.handleToggleClick}/>
					<Timer duration={this.state.duration} currentTime={this.state.currentTime}/>
				</VideoPlayerControls>
				
				<Video
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
					/>
			 </VideoPlayerLayout>
		)
	}
}

export default VideoPlayer