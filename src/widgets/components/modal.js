import React from 'react';
import PropTypes from 'prop-types';
import './modal.css'

function Modal(props) {
	
	return (
		<div className="Modal">
			esto es una modal
			{props.children}
			<button onClick={props.handleClick}>cerrar</button>
		</div>
	);
	
}

Modal.propTypes = {

};

export default Modal;