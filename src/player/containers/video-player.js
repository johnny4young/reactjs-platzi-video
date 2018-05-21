import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import VideoPlayerControls from '../components/video-player-controls'

import Formating from '../../utilities/formating'
import ProgressBar from '../components/progress-bar';

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
			duration: this.video.duration
		});

	}

	handleTimeUpdate = event => {
		console.log(this.video.currentTime);
		this.setState({
			currentTime: this.video.currentTime
		})
	}

	handleProgressChange = event =>  {
		this.video.currentTime = event.target.value;
	}

	render(){
		const durationFormatted = Formating.formattedTime(this.state.duration.toString());
		const currentTimeFormatted = Formating.formattedTime(this.state.currentTime.toString());
		return (
			<VideoPlayerLayout>
				<Title 
				title="feo"/>
				<VideoPlayerControls>
					<PlayPause pause={this.state.pause} handleClick={this.handleToggleClick}/>
					<Timer duration={durationFormatted} currentTime={currentTimeFormatted} />
					<ProgressBar 
						duration={this.state.duration}
						value={this.state.currentTime}
						handleProgressChange={this.handleProgressChange}/>
				</VideoPlayerControls >
				
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