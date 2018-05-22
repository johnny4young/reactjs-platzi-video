import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './video.css'

class Video extends Component {

	componentWillReceiveProps = (nextProps) =>{
		if(nextProps.pause != this.props.pause){
			this.togglePlay();
		}
	}

	togglePlay = () =>{
		if(this.props.pause){
			this.video.play();
		}
		else{
			this.video.pause();
		}
		
	}

	setRef = element =>{
		this.video = element;
	}

	render() {
		const {
			handleLoadedMetadata,
			handleTimeUpdate,
			handleSeeking,
			handleSeeked
		} = this.props;

		return (
			<div className="Video">
				<video
					ref={this.setRef}
					autoPlay={this.props.autoplay}
					src={this.props.src}
					onLoadedMetadata={handleLoadedMetadata}
					onTimeUpdate={handleTimeUpdate}
					onSeeking={handleSeeking}
					onSeeked={handleSeeked}>
				</video>
			</div>
		);
	}
}

Video.propTypes = {

};

export default Video;