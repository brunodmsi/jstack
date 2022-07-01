import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

import styles from './Post.scss';

const Post = ({ 
	post,
	onRemove,
}) => {
	return (
		<>
			<article className={post.removed ? styles.postDeleted : styles.post}>
				<PostHeader
					post={{
						id: post.id,
						read: post.read,
						title: post.title
					}} 
					onRemove={onRemove} 
				/>
				<br />
				<small>{post.subtitle}</small>
				<br />
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
		removed: PropTypes.bool.isRequired,
	}).isRequired,
	onRemove: PropTypes.func.isRequired,
}

export default Post;