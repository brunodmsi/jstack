import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, subtitle, likes }) => {
	return (
		<>
			<article>
				<strong>{title}</strong><br />
				<small>{subtitle}</small>
				Likes: {likes / 2}
			</article>

			<br />
		</>
	)
}

Post.propTypes = {
	likes: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
}

export default Post;