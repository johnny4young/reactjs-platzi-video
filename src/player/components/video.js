import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './video.css'

class Video extends Component {
	render() {
		return (
			<div className="Video">
				<video
					autoPlay={this.props.autoplay}
					controls
					src={this.props.src}>
				</video>
			</div>
		);
	}
}

Video.propTypes = {

};

export default Video;