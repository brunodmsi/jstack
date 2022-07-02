import React, { useContext } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import Button from "../Button";
import Title from "../Title";

import { ThemeContext } from "../../context/ThemeContext";

const Header = ({ children, title = "JStack's Blog" }) => {
	const { onToggleTheme } = useContext(ThemeContext);

	return (
		<>
			<Title>{title}</Title>

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