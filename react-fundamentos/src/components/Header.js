import React from "react";
import PropTypes from 'prop-types';

const Header = ({ children, title = "JStack's Blog" }) => {
	return (
		<>
			<h1>{title}</h1>
		
			{children}
		</>
	);
}

Header.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
}

export default Header;