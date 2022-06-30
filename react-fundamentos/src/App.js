import React, { useState, createContext } from 'react';
import Header from './components/Header';
import Post from './components/Post';

const defaultPosts = [
	{ id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false },
	{ id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: true },
	{ id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false },
]

export const ThemeContext = createContext('dark');

const App = () => {
	const [theme, setTheme] = useState('dark');
	const [posts, setPosts] = useState(defaultPosts)

	const handleToggleTheme = () => {
		setTheme((prevTheme) => (
			prevTheme === 'dark'
				? 'light'
				: 'dark'
		))
	}

	const handleRefresh = () => {
		setPosts((prevPosts) => [
			...prevPosts, 
			{
				id: Math.random(),
				title: `Title#0${prevPosts.length + 1}`,
				subtitle: `Sub#0${prevPosts.length + 1}`,
				likes: 50,
				read: false
			}
		]);
	}

	const handleRemovePost = (postId) => {
		setPosts((prevPosts) => (
			prevPosts.filter((prevPost) => prevPost.id !== postId)
		))
	}

	return (
		<ThemeContext.Provider value={theme}>
			<Header onToggleTheme={handleToggleTheme}>
				<h2>
					Posts da semana
					<button onClick={handleRefresh}>Atualizar</button>
				</h2>
			</Header>

			<hr />

			{posts.map((post) => (
				<Post 
					key={post.id}
					post={post}
					onRemove={handleRemovePost}
				/>
			))}
		</ThemeContext.Provider>
	);
}

export default App;
