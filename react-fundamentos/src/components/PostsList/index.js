import React from 'react';

import { Container } from './styles';
import Post from './Post';

import posts from './posts';

const PostsList = () => {
	return (
		<Container>
			{posts.map((post) => (
				<Post 
					key={post.id}	
					title={post.title}
					description={post.description}
				/>
			))}
		</Container>
	)
};

export default PostsList