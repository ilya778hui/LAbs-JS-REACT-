# Дизайн Архитектуры

## Приложение
Todo List: Добавление/просмотр задач.

## Структура Модулей
- Core modules (статические): app.mjs (основной), core.mjs (класс TodoList), utils.mjs (helpers), constants.mjs (статусы).  
- Feature modules (динамические): advanced_feature.mjs (экспорт JSON - on interaction), lazy_component.mjs (статистика - on visibility).  
- Utility: Общие функции.

Принципы: Decoupling для независимости (Гл. 5, “The Importance of Decoupling Applications”).