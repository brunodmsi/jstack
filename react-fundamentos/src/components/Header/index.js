import React from 'react';

import { useTheme } from '../../hooks/theme';
import { Container } from './styles';

const Header = () => {
  const { selectedTheme, onToggleTheme } = useTheme();

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