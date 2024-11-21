import React, { useEffect, useState, useCallback } from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartRegular,
  faComment as faCommentRegular,
  faShareSquare as faShareRegular,
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";

const defaultImage = "https://via.placeholder.com/150";
const defaultUserImage = "https://via.placeholder.com/50";

const PostList = ({ onPostClick }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const renderPost = useCallback(
    (post) => (
      <div className="post" key={post.id}>
        <div className="post-header">
  <div className="user-info">
    <img src={defaultUserImage} alt="User" className="user-image" />
    <span className="user-name">User {post.userId}</span>
  </div>
  <FontAwesomeIcon icon={faEllipsisH} className="options-icon" />
</div>

        <img src={defaultImage} alt={post.title} className="post-image" />
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <div className="post-actions">
          <FontAwesomeIcon icon={faHeartRegular} className="post-action-icon" />
          <FontAwesomeIcon
            icon={faCommentRegular}
            className="post-action-icon"
            onClick={() => onPostClick(post.id)}
          />
          <FontAwesomeIcon icon={faShareRegular} className="post-action-icon" />
        </div>
      </div>
    ),
    [onPostClick]
  );

  return <div>{posts.map(renderPost)}</div>;
};

export default React.memo(PostList);
