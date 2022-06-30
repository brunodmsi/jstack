import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Button from "./Button";
import { ThemeContext } from "../context/ThemeContext";

const Header = ({ children, title = "JStack's Blog" }) => {
	const { onToggleTheme } = useContext(ThemeContext);

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
}

export default Header;