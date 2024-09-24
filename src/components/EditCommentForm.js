import React, { useState } from "react";

const EditCommentForm = ({ comment, onEdit }) => {
  const [content, setContent] = useState(comment.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ ...comment, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Update Comment</button>
    </form>
  );
};

export default EditCommentForm;
