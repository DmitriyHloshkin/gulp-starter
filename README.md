<h1>
  <img alt="fire" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f525.png">
  Особенности
</h1>

<ul dir="auto">
  <li>используется препроцессор <a href="https://sass-lang.com/" rel="nofollow">SCSS</a></li>
  <li>используется <a href="https://webpack.js.org/" rel="nofollow">Webpack</a> для сборки JavaScript-модулей</li>
  <li>используется <a href="https://babeljs.io" rel="nofollow">babel</a></li>
  <li>уже подключен <a href="https://necolas.github.io/normalize.css/" rel="nofollow">Normalize.css</a></li>
  <li>автоматический рендер страницы при сохранении данных</li>
</ul>

<h2 dir="auto">
  <a>
    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
    <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
   </a>

  <g-emoji class="g-emoji" alias="hammer_and_wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png">
    <img class="emoji" alt="hammer_and_wrench" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png">
  </g-emoji> 
   Установка
 </h2>
 
 <ul dir="auto">
  <li>установите <a href="https://nodejs.org/en/" rel="nofollow">NodeJS</a></li>
  <li>установите глобально:
  
  <ul dir="auto">
    <li><a href="https://gulpjs.com/" rel="nofollow">Gulp</a>: <code>npm i -g gulp</code></li>
  </ul>
  
  </li>
  <li>скачайте сборку с помощью <a href="https://git-scm.com/downloads" rel="nofollow">Git</a>: <code>git clone https://github.com/DmitriyHloshkin/gulp-starter</code></li>
  <li>перейдите в скачанную папку со сборкой: <code>cd gulp-starter</code></li>
  <li>введите <code>npm i</code> для установки необходимых зависимостей</li>
  <li>чтобы начать работу, введите команду: <code>npm run dev</code> (режим разработки)</li>
  <li>чтобы начать работу c json-server, введите команду: <code>npm run dev:json</code>(режим разработки + json-server)</li>
  <li>чтобы собрать проект, введите команду <code>npm run prod</code> (режим сборки)</li>
</ul>

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером (по умолчанию <b>3001</b> порт для 
<a href="https://browsersync.io" rel="nofollow">browsersync</a> и <b>3002</b> для <a href="https://github.com/typicode/json-server" rel="nofollow">json-server</a>). 
Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.
Порт <b>3003</b> можно использовать для настройки <a href="https://browsersync.io" rel="nofollow">browsersync</a>

<h2 dir="auto"><a id="user-content-open_file_folder-файловая-структура" class="anchor" aria-hidden="true" href="#open_file_folder-файловая-структура"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><g-emoji class="g-emoji" alias="open_file_folder" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c2.png"><img class="emoji" alt="open_file_folder" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c2.png"></g-emoji> Файловая структура</h2>

<pre class="notranslate"><code>gulp-scss-starter
├── dist
├── gulp
│&nbsp; &nbsp; ├── config
│&nbsp; &nbsp; ├── tasks
├── src
│&nbsp; &nbsp; ├── files
│&nbsp; &nbsp; ├── html
│&nbsp; &nbsp; ├── img
│&nbsp; &nbsp; ├── js
│&nbsp; &nbsp; ├── scss
├── index.html
├── webpack.config.js
├── package.json
├── json-server-db.json
├── gulpfile.js
├── .jshintrc
└── .gitignore
</code></pre>

<ul dir="auto">
  <li>Корень папки:
  <ul dir="auto">

  <li><code>index.html</code> — индексная страница приложения</li>
  <li><code>webpack.config.js</code> — настройки Webpack</li>
  <li><code>package.json</code> — список зависимостей</li>
  <li><code>.jshintrc</code> — настройки jshint</li> 
  <li><code>.gitignore</code> – запрет на отслеживание файлов Git'ом</li>
  <li><code>gulpfile.js</code> — входящая точка gul</li>
  <li><code>json-server-db.json</code> – локальная база json-server</li>

  </ul>

  </li>
  
  <li>Папка <code>src</code> - используется во время разработки:
  <ul dir="auto">

  <li>файлы<code>src/files</code></li>
  <li>html компоненты: <code>src/html</code></li>
  <li>изображения: <code>src/img</code></li>
  <li>JS-файлы: <code>src/js</code></li>
  <li>SCSS-файлы: <code>src/scss</code></li>

  </ul>

  </li>
<li>Папка <code>dist</code> - папка, из которой запускается локальный сервер для разработки (при запуске <code>npm run dev</code> или <code>npm run dev:json</code>)</li>
<li>Папка <code>gulp</code> - папка с Gulp-тасками и настройками</li>
 
</ul>

<h2 dir="auto"><a>
  <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">
  <img class="emoji" alt="bulb" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png"></g-emoji> 
  Рекомендации по использованию
</h2>

<h3 dir="auto"><a><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>HTML</h3>
<ul dir="auto">
  <li>Используется пакет <a href="https://www.npmjs.com/package/gulp-file-include">gulp-file-include</a>
  с помощью которого вы можете создавать отдельные элементы в папке<code>src/html/</code>, после успешно подключать их к основному файлу</li>
  <li>При сборки проекта <code>npm run prod</code> результирующий файл <code>dist/html/index.html/</code> минифицируется</li>
</ul>

<h3 dir="auto"><a><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Files</h3>
<ul dir="auto">
  <li>Файлы находятся в <code>dist/files/</code></li>
  <li>Автоматическая генерация файлов в <code>dist/files/</code> при добавлении/изменении файлов в <code>src/files/</code></li>
</ul>

<h3 dir="auto"><a><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Img</h3>
<ul dir="auto">
  <li>изображения находятся в папке <code>src/img</code></li>
  <ul dir="auto">
  <li>изображения автоматически оптимизируются без потери качества</li>
  <li>изображения автоматически конвертируются в формат <code>.webp</code></li>
  <li>С помощью скрипта <code>src/js/modules/gulpScripts.js</code> идет проверка поддержки браузера <code>.webp</code> формата и в зависимости

    от результата добавляет в разметку необходимый формат изображения</li>

  </ul>
</li>
</ul>

<h3 dir="auto"><a><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>SCSS</h3>
<ul dir="auto">
  <li>Стили находятся в <code>src/scss/</code></li>
  <li>Основной файл стилей <code>src/scss/style.scss</code></li>
  <li>При сборки проекта <code>npm run prod</code> результирующий файл <code>dist/style/style.css</code> минифицируется</li>
</ul>
