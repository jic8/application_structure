# Схема уездного проекта N

Структура:

- index.html - база. Подключение модулей, стилей
- src/css/main.css - основной файл стилей. Из интересного: тут меняется цвет фона
- src/css/Normalize.css.css - это небольшой CSS-файл, который обеспечивает более согласованный внешний вид элементов HTML в разных браузерах. Он сохраняет некоторые полезные стили по умолчанию и удаляет только те, которые могут привести к несогласованности между браузерами.
- src/js/dataBase.js - модуль, где хранится структура проекта, данные по файлам, их связь, название и описание файлов.
- src/js/gojs.js - это библиотека JavaScript для создания интерактивных диаграмм и графиков на веб-страницах.
- src/js/main.js - основной файл. В нем приходит создание диаграммы, нод, наполнение их контентом, также немного логики по управлению информационной панелью.
- src/js/vars.js - тут можно изменить цветовую палитру диаграммы.
