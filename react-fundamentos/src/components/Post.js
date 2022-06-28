import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ 
	title, 
	subtitle, 
	likes, 
	onRemove,
	id
}) => {
	return (
		<>
			<article>
				<strong>
					{title}
					<button onClick={() => onRemove(id)}>
						Remover
					</button>
				</strong>
				<br />
				<small>{subtitle}</small>
				Likes: {likes / 2}
			</article>

			<br />
		</>
	)
}

Post.propTypes = {
	id: PropTypes.number.isRequired,
	likes: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	onRemove: PropTypes.func.isRequired,
}

export default Post;