import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

import { Container, Rate, Subtitle } from './styles';
 
const Post = ({ 
	post,
	onRemove,
}) => {
	return (
		<>
			<Container removed={post.removed}>
				<PostHeader
					post={{
						id: post.id,
						read: post.read,
						title: post.title
					}} 
					onRemove={onRemove} 
				/>

				<Subtitle>{post.subtitle}</Subtitle>
				<Rate>{post.likes / 2}</Rate>
			</Container>

			<br />
		</>
	)
}

Post.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string.isRequired,
		read: PropTypes.bool.isRequired,
		removed: PropTypes.bool.isRequired,
	}).isRequired,
	onRemove: PropTypes.func.isRequired,
}

export default Post;