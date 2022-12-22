# ТЗ

Наименование: Share with me 

Описание: веб-приложение для буккроссинга.  

Предметная область: бронирование и предоставление услуг

**Данные:** 

<p class="has-line-data" data-line-start="0" data-line-end="5">Автор:<br>
idauthor int AI PK<br>
surname varchar(20)<br>
name varchar(20)<br>
patronymic varchar(20)</p>
<p class="has-line-data" data-line-start="6" data-line-end="9">book_has_author:<br>
idbook int PK<br>
idauthor int PK</p>
<p class="has-line-data" data-line-start="10" data-line-end="17">bookinstance:<br>
idbookinstance int AI PK<br>
idbook int<br>
iduser int<br>
bookperiod int<br>
review text<br>
waitingforconfirmation tin</p>
<p class="has-line-data" data-line-start="18" data-line-end="21">genre:<br>
idgenre int AI PK<br>
genre varchar(30)</p>
<p class="has-line-data" data-line-start="22" data-line-end="25">genre_has_book:<br>
idgenre int PK<br>
idbook int PK</p>
<p class="has-line-data" data-line-start="26" data-line-end="29">language:<br>
idlanguage int AI PK<br>
language varchar(20)</p>

**Для каждого элемента данных - ограничения** 

Книги:

Бронировать - любой пользователь: 

 - процедура бронирования: предполагается, что клиент нажимает кнопку "бронь", уведомляя этим владельца книги о своём намерение её взять(отображается в личном кабинете). Владелец книги подтверждает бронирование или отклоняет его. Сама книга не отображается на главной странице пока клиент или владелец не отменит бронь

Изменять данные о бронирование - пользователь, выложивший информацию
Удалять книги с сайта - администратор и владелец книги 


**Общие ограничения целостности** 

**Пользовательские роли** 

Пользователь: возможность просматривать, добавлять, удалять и бронировать книги или отменять бронь. 


**UI / API** 

Регистрация, вход, главная страница, личный кабинет

Рабочая версия: [Untitled – Figma](https://www.figma.com/file/4gGHblh6UenNoHoNugYuUj/Untitled?node-id=0%3A1) 

**Технологии разработки** 

**Язык программирования**

CSS, Javascript, React, Node JS, express 

**СУБД** 

MySQL

**Тестирование**
