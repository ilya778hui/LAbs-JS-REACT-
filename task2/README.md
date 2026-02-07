# Lab 4.2: Refactoring - Article Components

Подход к рефакторингу:
- Начал с монолита в ArticleManager.
- Извлёк AddArticle для формы добавления.
- Извлёк ArticleList для <ul> и ArticleItem для <li> с локальным состоянием isOpened.
- Обязанности: ArticleManager управляет данными, дети — рендером и локальной логикой.

