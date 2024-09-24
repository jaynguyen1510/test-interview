import React, { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList";
import AddArticleForm from "./components/AddArticleForm";

const App = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const storedArticles = JSON.parse(localStorage.getItem("articles")) || [];
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(storedArticles),
        Math.random() * (1000 - 200) + 200
      );
    });
  };

  const saveArticles = async (articles) => {
    localStorage.setItem("articles", JSON.stringify(articles));
    return new Promise((resolve) => {
      setTimeout(() => resolve(), Math.random() * (1000 - 200) + 200);
    });
  };

  useEffect(() => {
    const loadArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
    };
    loadArticles();
  }, []);

  const handleAddArticle = async (newArticle) => {
    const updatedArticles = [...articles, newArticle];
    await saveArticles(updatedArticles);
    setArticles(updatedArticles);
  };

  const handleUpdateArticle = async (updatedArticle) => {
    const updatedArticles = articles.map((article) =>
      article.id === updatedArticle.id ? updatedArticle : article
    );
    await saveArticles(updatedArticles);
    setArticles(updatedArticles);
  };

  const handleDeleteArticle = async (id) => {
    const updatedArticles = articles.filter((article) => article.id !== id);
    await saveArticles(updatedArticles);
    setArticles(updatedArticles);
  };

  return (
    <div>
      <h1>Article Management</h1>
      <AddArticleForm onAddArticle={handleAddArticle} />
      <ArticleList
        articles={articles}
        onUpdateArticle={handleUpdateArticle}
        onDeleteArticle={handleDeleteArticle}
      />
    </div>
  );
};

export default App;
