import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import VideoPlayerControls from '../components/video-player-controls'

import Formating from '../../utilities/formating'
import {isFullScreen, requestFullScreen, exitFullScreen } from '../../utilities/fullscreen'
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'

class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		loading: false,
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

	handleSeeked = event => {
		this.setState({
			loading: false
		})
	}

	handleSeeking = event => {
		this.setState({
			loading: true
		})
	}

	handleVolumeChange = event => {
		this.video.volume = event.target.value; 
	}

	handleFullScreenClick = event => {
		console.log('doing zoom');
		console.log('condition? ', isFullScreen());
		if ( isFullScreen() ) {
			exitFullScreen()
		}
		else{
			requestFullScreen(this.player);
		}
	}

	setRef = element => {
		this.player = element;
	}

	render(){
		const durationFormatted = Formating.formattedTime(this.state.duration.toString());
		const currentTimeFormatted = Formating.formattedTime(this.state.currentTime.toString());
		return (
			<VideoPlayerLayout
			 setRef={this.setRef}>
				<Title 
				title="feo"/>
				<VideoPlayerControls>
					<PlayPause pause={this.state.pause} handleClick={this.handleToggleClick}/>
					<Timer duration={durationFormatted} currentTime={currentTimeFormatted} />
					<ProgressBar 
						duration={this.state.duration}
						value={this.state.currentTime}
						handleProgressChange={this.handleProgressChange}/>
					<Volume handleVolumeChange={this.handleVolumeChange}/>
					<FullScreen 
					handleFullScreenClick={this.handleFullScreenClick}
					/>
				</VideoPlayerControls>
				
				<Spinner active={this.state.loading}/>
				<Video
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					handleSeeking={this.handleSeeking}
					handleSeeked={this.handleSeeked}
					src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
					/>
			 </VideoPlayerLayout>
		)
	}
}

export default VideoPlayer