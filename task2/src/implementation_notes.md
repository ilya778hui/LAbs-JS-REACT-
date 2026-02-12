# Заметки по Реализации

## Статические импорты
- Использованы для core: named, module object, default (не использован, но демонстрируется в комментариях).  
- Загружаются eagerly для стартапа (Гл. 5, “Static Imports”).

## Динамические импорты
- Import on Interaction: По клику, с async/await и catch.  
- Import on Visibility: С IntersectionObserver, disconnect после загрузки.  
- Обработка ошибок: catch с fallback (Гл. 5, “Dynamic Imports”).

Преимущества: Lazy-loading улучшает производительность.