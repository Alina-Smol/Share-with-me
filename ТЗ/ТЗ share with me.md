# ТЗ

Наименование: Share with me 

Описание: веб-приложение для буккроссинга.  

Предметная область: бронирование и предоставление услуг

**Данные:** 

Пользователь:

- имя - varchar(20),
- фамилия - varchar(20),
- пароль varchar(8),
- номер общежития - int,
- номер комнаты - int,
- аватарка - image
- логин(почта) - varchar(30)

Книги: 

- наименование - varchar(100),
- idlanguage - int 

<p class="has-line-data" data-line-start="0" data-line-end="4">Автор<br> idauthor - int (auto_increment)<br> - surname - varchar(20)<br> - name - varchar(20)</p> <p class="has-line-data" data-line-start="5" data-line-end="11">Экземпляр книги<br> idbookinstance - int(auto_increment)<br> idbook - int<br> iduser - int<br> bookperiod(количество дней, на которое полтзователь готов одолжить книгу) - int<br> waitingforconfirmation(статус книги: книга свободна(1), ожидается подтверждение бронирования(2), забронировано(3)) - int</p> <p class="has-line-data" data-line-start="12" data-line-end="15">Жанр<br> idgenre - int(auto_increment)<br> Название жанра - varchar(30)</p> <p class="has-line-data" data-line-start="16" data-line-end="19">Язык<br> idlanguage - int(auto_increment)<br> Язык - varchar(30)</p> <p class="has-line-data" data-line-start="20" data-line-end="24">Книга<br> idbook - int(auto_increment)<br> Название - varchar(30)<br> idlanguage - int</p>

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
