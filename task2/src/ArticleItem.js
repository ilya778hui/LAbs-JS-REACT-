import React, { useState } from 'react';

function ArticleItem({ article, onClickRemove }) {
  // Локальное состояние для toggle (Задача 3, вместо parent display)
  const [isOpened, setIsOpened] = useState(false);

  function onClickToggle() {
    setIsOpened(!isOpened); // Toggle логика здесь
  }

  return (
    <li>
      <a href={`#${article.id}`} title="Toggle Summary" onClick={onClickToggle}>
        {article.title}
      </a>
      <button onClick={() => onClickRemove(article.id)}>×</button>
      <p style={{ display: isOpened ? 'block' : 'none' }}>{article.summary}</p>
    </li>
  );
}

export default ArticleItem;