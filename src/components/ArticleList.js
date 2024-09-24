import React from "react";
import Article from "./Article";

const ArticleList = ({ articles, onUpdateArticle, onDeleteArticle }) => {
  return (
    <div>
      {articles.map((article) => (
        <Article
          key={article.id}
          article={article}
          onUpdateArticle={onUpdateArticle}
          onDeleteArticle={onDeleteArticle}
        />
      ))}
    </div>
  );
};

export default ArticleList;
