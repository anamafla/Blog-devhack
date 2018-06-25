import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ id, title, body, deletePost, editPost }) => (
  <div>
    <h1>{title}</h1>
    <p>{body}</p>
    <button onClick={() => deletePost(id)}>Delete</button>
    <button onClick={() => editPost(id)}>Edit</button>
  </div>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  deletePost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
};

Post.defaultProps = {
  body: 'This post has no content',
};

export default Post;
