import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  Media  from "./media";
import Playlist from "./playlist.css"


function playlist(props){
	
	//const playlist = this.props.data.categories[0].playlist;
	console.log(props.data);
	return (
		<div className="Playlist">
		
		{
			props.playlist.map( (media) => {
				return <Media handleClick={props.handleOpenModal} {...media} key={media.id}/>
			})
		}
		</div>
	);
	
}

playlist.propTypes = {

};

export default playlist;