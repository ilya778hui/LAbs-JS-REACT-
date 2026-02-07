import React from 'react';
import ArticleItem from './ArticleItem'; // Импорт Item

function ArticleList({ articles, onClickRemove }) {
  // Маппинг на Item (Задача 3)
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} onClickRemove={onClickRemove} />
      ))}
    </ul>
  );
}

export default ArticleList;