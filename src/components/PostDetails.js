import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import '../styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const defaultImage = "https://via.placeholder.com/150";
const PostDetails = ({ postId, onClose }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostDetails = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const postData = await response.json();
      setPost(postData);
    };

    const fetchComments = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      const commentsData = await response.json();
      setComments(commentsData);
    };

    fetchPostDetails();
    fetchComments();
  }, [postId]);

  return post ? (
    <div className="sidebar-content">
              <FontAwesomeIcon
          icon={faTimes}
          className="close-icon"
          onClick={onClose}
        />
      <div className="post-details-header">
      <img src={defaultImage} alt={post.title} className="post-image" />
        <h3>{post.title}</h3>

      </div>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default React.memo(PostDetails);
