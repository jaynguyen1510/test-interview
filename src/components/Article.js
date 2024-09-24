import React, { useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import EditArticleForm from "./EditArticleForm";

const Article = ({ article, onUpdateArticle, onDeleteArticle }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (updatedArticle) => {
    onUpdateArticle(updatedArticle);
    setIsEditing(false);
  };

  const handleAddComment = (newComment) => {
    const updatedArticle = {
      ...article,
      comments: [...article.comments, newComment],
    };
    onUpdateArticle(updatedArticle);
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = article.comments.filter(
      (comment) => comment.id !== commentId
    );
    const updatedArticle = {
      ...article,
      comments: updatedComments,
    };
    onUpdateArticle(updatedArticle);
  };

  return (
    <div>
      {isEditing ? (
        <EditArticleForm article={article} onEdit={handleEdit} />
      ) : (
        <div>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteArticle(article.id)}>Delete</button>
          <CommentList
            comments={article.comments}
            onDeleteComment={handleDeleteComment}
          />
          <CommentForm articleId={article.id} onAddComment={handleAddComment} />
        </div>
      )}
    </div>
  );
};

export default Article;
