import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../context/ThemeContext';

const Button = ({ children, onClick }) => {
	const { theme }= useContext(ThemeContext);

	return (
		<button 
			style={{
				color: theme === 'dark' ? '#fff' : '#000',
				background: theme === 'dark' ? '#000' : '#fff'
			}}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}
export default Button;