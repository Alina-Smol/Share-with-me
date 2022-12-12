const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

require('dotenv').config();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;


// Connection Pool
const pool = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});



// const routes = require('./server/routes/user');
// app.use('/', routes);

// view user

app.get("/", (req, res) => {

    // User the connection
    pool.query("SELECT name, surname, dormroom, roomnumber, connection, login FROM user WHERE iduser = 5;", (err, result) => { // Сюда id пользователя
        // When done with the connection
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
       // console.log('The data from user table: \n', result)
    });
});


// update user

app.put('/profileupdate/:id', (req, res) => {
    const id = req.body.id;
    const values = [
        req.body.name,
        req.body.surname,
        req.body.dormroom,
        req.body.roomnumber,
        req.body.connection,
    ]
    pool.query("UPDATE SET user name = ?, surname = ?, dormroom = ?, roomnumber = ?, connection = ?-  WHERE id = ?", [...values,id],
        (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
