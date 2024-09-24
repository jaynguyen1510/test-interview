import React, { useState } from "react";

const AddArticleForm = ({ onAddArticle }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: Date.now(),
      title,
      content,
      comments: [],
    };
    onAddArticle(newArticle);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Add Article</button>
    </form>
  );
};

export default AddArticleForm;
