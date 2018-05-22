import React from 'react';
import PropTypes from 'prop-types';
import './modal.css'

function Modal(props) {
	
	return (
		<div className="Modal">
			{props.children}
			<button onClick={props.handleClick} className="Modal-close"/>
		</div>
	);
	
}

Modal.propTypes = {

};

export default Modal;