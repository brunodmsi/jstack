import React from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider } from './hooks/theme';

import themes from './styles/themes';

const App = () => {
	return (
		<ThemeProvider>
			<GlobalStyle />	
			<Layout />
		</ThemeProvider>
	);
}

export default App;
