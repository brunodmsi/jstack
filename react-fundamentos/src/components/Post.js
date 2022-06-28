import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ 
	post,
	onRemove,
}) => {
	return (
		<>
			<article>
				<strong>
					{post.read && <s>{post.title}</s>}
					{!post.read && post.title}
					<button onClick={() => onRemove(post.id)}>
						Remover
					</button>
				</strong>
				<br />
				<small>{post.subtitle}</small>
				Likes: {post.likes / 2}
			</article>

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
	}).isRequired,
	onRemove: PropTypes.func.isRequired,
}

export default Post;