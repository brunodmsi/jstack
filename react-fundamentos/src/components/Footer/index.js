import React from 'react';

import { Container } from './styles';

const Footer = ({ onToggleTheme, selectedTheme }) => {
	return (
		<Container>
			<span>JStack's blog. Todos os direitos reservados</span>
			<button 
				type="button" 
				onClick={onToggleTheme}
			>
				{selectedTheme === 'dark' ? '🌞' : '🌚'}
			</button>
		</Container>
	);
};

export default Footer;