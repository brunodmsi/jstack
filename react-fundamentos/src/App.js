import React, { useState } from 'react';
import Header from './components/Header';
import Post from './components/Post';

const defaultPosts = [
	{ id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
	{ id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
	{ id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
]

const App = () => {
	const [posts, setPosts] = useState(defaultPosts)

	const handleRefresh = () => {

		setPosts((prevPosts) => [
			...prevPosts, 
			{
				id: Math.random(),
				title: `Title#0${prevPosts.length + 1}`,
				subtitle: `Sub#0${prevPosts.length + 1}`,
				likes: 50
			}
		]);
	}

	const handleRemovePost = (postId) => {
		setPosts((prevPosts) => (
			prevPosts.filter((prevPost) => prevPost.id !== postId)
		))
	}

	return (
		<>
			<Header>
				<h2>
					Posts da semana
					<button onClick={handleRefresh}>Atualizar</button>
				</h2>
			</Header>

			<hr />

			{posts.map((post) => (
				<Post 
					key={post.id}
					id={post.id}
					title={post.title}	
					subtitle={post.subtitle}	
					likes={post.likes}	
					onRemove={handleRemovePost}
				/>
			))}
		</>
	);
}

export default App;
