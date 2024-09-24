import React, { useState } from "react";

const CommentForm = ({ articleId, onAddComment }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      content,
    };
    onAddComment(newComment); // Gọi onAddComment ở đây
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a comment"
        required
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
