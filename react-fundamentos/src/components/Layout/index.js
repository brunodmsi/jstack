import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

const Layout = ({ onToggleTheme, selectedTheme }) => (
	<>
		<Header />	
		<PostsList />
		<Footer />
	</>
);

export default Layout;