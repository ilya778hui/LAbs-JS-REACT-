import React, { useState } from 'react';
import AddArticle from './AddArticle'; // Импорт (Задача 2)
import ArticleList from './ArticleList'; // Импорт (Задача 3)

function ArticleManager() {
  // Состояния (Задача 1)
  const [articles, setArticles] = useState([]); // Массив статей
  const [title, setTitle] = useState(''); // Поле title
  const [summary, setSummary] = useState(''); // Поле summary

  // Функция добавления (Задача 1)
  function onClickAdd() {
    const newArticle = { id: Date.now(), title, summary }; // Без display, т.к. в Item
    setArticles([...articles, newArticle]);
    setTitle('');
    setSummary('');
  }

  // Функция удаления (Задача 1)
  function onClickRemove(id) {
    setArticles(articles.filter(a => a.id !== id));
  }

  return (
    <div>
      {/* AddArticle вместо формы (Задача 2) */}
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onClickAdd={onClickAdd}
      />

      {/* ArticleList вместо <ul> (Задача 3) */}
      <ArticleList articles={articles} onClickRemove={onClickRemove} />
    </div>
  );
}

export default ArticleManager;