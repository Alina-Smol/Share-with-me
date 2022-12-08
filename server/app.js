const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


// Parsing middle помогает передать json файлы через все формы
// Parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false}));

// Parse application/json7
app.use(bodyParser.json());

// статический файлы
app.use(express.static('public'));

// Template Engine
const handlebars = exphbs.create({extname:'.hbs'});
app.engine('.hbs', handlebars.engine)
app.set('view engine', 'hbs');

// Connection Pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


pool.getConnection((err, connection) => {
    if(err) throw err; // not connected
    console.log('Connected as ID ' + connection.threadId)
});

const routes = require('./server/routes/user');
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));