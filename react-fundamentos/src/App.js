import React from 'react';
import Header from './components/Header';
import Post from './components/Post';

const posts = [
	{ title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
	{ title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
	{ title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
]

const App = () => {
	return (
		<>
			<Header>
				<h3>Posts da semana</h3>
			</Header>

			<hr />

			{posts.map((post, index) => (
				<Post 
					key={`${post.title}-index`}
					title={post.title}	
					subtitle={post.subtitle}	
					likes={post.likes}	
				/>
			))}
		</>
	);
}

export default App;
