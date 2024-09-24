import React, { useState } from "react";
import EditCommentForm from "./EditCommentForm";

const Comment = ({ comment, onUpdateComment, onDeleteComment }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (updatedComment) => {
    onUpdateComment(updatedComment);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditCommentForm comment={comment} onEdit={handleEdit} />
      ) : (
        <div>
          <p>{comment.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteComment(comment.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Comment;
