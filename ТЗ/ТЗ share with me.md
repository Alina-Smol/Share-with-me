# ТЗ

Наименование: Share with me 

Описание: веб-приложение для буккроссинга.  

Предметная область: бронирование и предоставление услуг

**Данные:** 

Пользователь:

iduser int AI PK 
name varchar(20) 
surname varchar(20) 
dormroom int 
roomnumber int 
connection varchar(50) 
login varchar(30) 
password varchar(100) 
idgithub int 

Книги: 

idbook int AI PK 
name varchar(100) 
idlanguage int

Автор:
idauthor int AI PK 
surname varchar(20) 
name varchar(20) 
patronymic varchar(20)

book_has_author:
 idbook int PK 
 idauthor int PK
 
bookinstance:
  idbookinstance int AI PK 
  idbook int  
  iduser int 
  bookperiod int 
  review text 
  waitingforconfirmation tin
  
genre:
  idgenre int AI PK 
  genre varchar(30)
  
genre_has_book:
 idgenre int PK 
 idbook int PK

language:
  idlanguage int AI PK 
  language varchar(20)

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
