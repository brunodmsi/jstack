import React from 'react';

import { useTheme } from '../../hooks/theme';
import { Container } from './styles';

class Header extends React.Component {
	render() {
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
}

//   const { selectedTheme, onToggleTheme } = useTheme();
//   return (
//   );
// }

export default Header;