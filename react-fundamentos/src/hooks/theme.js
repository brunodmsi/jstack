import React, { useContext, useEffect, useMemo, useState } from 'react';
import { 
	ThemeContext as StyledThemeContext, 
	ThemeContext, 
	ThemeProvider as StyledThemeProvider 
} from 'styled-components';

import themes from '../styles/themes';
import config from '../config';

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => (
		localStorage.getItem(config.localStorage.theme) || 'dark'
	));
	
	const handleToggleTheme = () => {
		setTheme(prevState => {
			const newState = prevState === 'dark' ? 'light' : 'dark'
			localStorage.setItem(config.localStorage.theme, newState);
			return newState;
		});
	}

	const currentTheme = useMemo(() => {
		return themes[theme] || themes.dark;
	}, [theme]);

	return (
		<ThemeContext.Provider 
			value={{ 
				selectedTheme: theme, 
				onToggleTheme: handleToggleTheme 
			}}
		>
			<StyledThemeProvider theme={currentTheme}>
				{children}
			</StyledThemeProvider>
		</ThemeContext.Provider>
	)
}

const useTheme = () => {
	const context = useContext(StyledThemeContext);

	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
}

export { ThemeProvider, useTheme };