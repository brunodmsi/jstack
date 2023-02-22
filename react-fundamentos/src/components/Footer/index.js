import React from 'react';
import { useTheme } from '../../hooks/theme';

import { Container } from './styles';

const Footer = () => {
	const { selectedTheme, onToggleTheme } = useTheme();

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