import React from "react";

const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <button onClick={() => onDeleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
