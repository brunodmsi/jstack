import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

const Header = ({ children, onToggleTheme, title = "JStack's Blog" }) => {
	return (
		<>
			<h1>{title}</h1>

			<Button onClick={onToggleTheme}>
				Mudar tema
			</Button>
		
			{children}
		</>
	);
}

Header.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	onToggleTheme: PropTypes.func.isRequired
}

export default Header;