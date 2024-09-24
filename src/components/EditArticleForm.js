import React, { useState } from "react";

const EditArticleForm = ({ article, onEdit }) => {
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ ...article, title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Update Article</button>
    </form>
  );
};

export default EditArticleForm;
