import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
	constructor(props){
		super(props);
		this.state = {
			author : 'Johnny IV Young O'
		}
		//this.handleClick = this.handleClick.bind(this);
	}

	// handleClick(event){
	// 	this.setState({ author : 'Carolina Ponce'});
	// 	console.log(this.props.title);
	// }
	render(){
		const style = {
			container:{
				fontSize: 14,
				backgroundColor: 'white',
				color: '#44546b',
				cursor: 'pointer',
				width: 260,
				border: '1px solid red'
			}
		}
		return (
			<div className="Media" onClick={this.props.handleClick}>
				<div className="Media-cover">
					<img 
						src={this.props.cover}
						alt="img for testing"
						width={260}
						height={160}
						className="Media-image"/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	cover: PropTypes.string,
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;