import React from 'react';

import { Container } from './styles';

const Header = ({ onToggleTheme, selectedTheme }) => {
  return (
    <Container>
      <h1>JStack's Blog</h1>
			<button 
				type="button" 
				onClick={onToggleTheme}
			>
				{selectedTheme === 'dark' ? '🌞' : '🌚'}
			</button>
    </Container>
  );
}

export default Header;