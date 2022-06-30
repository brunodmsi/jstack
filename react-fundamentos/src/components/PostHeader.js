import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const PostHeader = ({ post, onRemove }) => {
	return (
		<>
			<strong>
				{post.read && <s>{post.title}</s>}
				{!post.read && post.title}
			</strong>
			<Button onClick={() => onRemove(post.id)}>
				Remover
			</Button>
		</>
	);
}

PostHeader.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		read: PropTypes.bool.isRequired,
	}).isRequired,
	onRemove: PropTypes.func.isRequired,
}

export default PostHeader;