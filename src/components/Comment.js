import React from "react";
import "../styles.css";


const Comment = ({ comment }) => {
  return (
    <div className="comment">
        <p>{comment.email}</p>
      <h5>{comment.name}</h5>
      <p>{comment.body}</p>
      
    </div>
  );
};

export default React.memo(Comment);
