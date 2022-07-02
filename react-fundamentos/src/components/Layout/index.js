import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

const Layout = ({ onToggleTheme, selectedTheme }) => (
	<>
		<Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />	
		<PostsList />
		<Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
	</>
);

export default Layout;