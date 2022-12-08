const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});




// View users
exports.view = (req,res) =>{
    // Router
        pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);

        // User the connection
        connection.query('SELECT * FROM user', (err, rows) =>{
            // When done with the connection
            connection.release();

            if(!err){
                res.render('home', {rows});
            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows)

        });
    });
}

// Find User by Search

exports.find = (req,res) =>{
    // Router
    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);

        let searchBook = req.body.search; // body.(имя фактичксуого ввода)

        // User the connection
        connection.query('SELECT * FROM user WHERE Name LIKE ? OR Login LIKE ?', ['%' + searchBook + '%', '%' + searchBook + '%'], (err, rows) =>{
            // When done with the connection
            connection.release();

            if(!err){
                res.render('home', {rows});
            } else {
                console.log(err);
            }

            console.log('The data from user table: \n', rows)

        });
    });
}

exports.form = (req,res) =>{
    res.render('add-user');
}


// Add new user

exports.create = (req,res) =>{
    // Router
    const {Name, Surname, Login, DormRoom, Password } = req.body;
    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);

        let searchBook = req.body.search; // body.(имя фактичксуого ввода)

        // User the connection
        connection.query('INSERT INTO user SET Name = ?, Surname = ?', [Name, Surname], (err, rows) =>{
            // When done with the connection
            connection.release();

            if(!err){
                res.render('add-user', {alert: 'User added sucessefully'});
            } else {
                console.log(err);
            }

            console.log('The data from user table: \n', rows)

        });
    });
}
exports.edit = (req,res) => {
    // Router

    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);

        // User the connection
        connection.query('SELECT * FROM user WHERE IDUser = ?',[req.params.id], (err, rows) =>{
            // When done with the connection
            connection.release();
            if(!err){
                res.render('edit-user', {rows});
            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}
// Update user


exports.update = (req,res) => {
    // Router
    const {Name, Surname, Login, DormRoom, Password } = req.body;

    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);

        // User the connection
        connection.query('UPDATE `user` SET Name= ? WHERE IDUser = ?;',[Name, req.params.id], (err, rows) =>{
            // When done with the connection
            connection.release();
            if(!err){
                pool.getConnection((err, connection) => {
                    if(err) throw err; // not connected
                    console.log('Connected as ID ' + connection.threadId);
                    connection.query('SELECT * FROM user WHERE IDUser = ?',[req.params.id], (err, rows) =>{
                        // When done with the connection
                        connection.release();
                        if(!err){
                            res.render('edit-user', {rows, alert: `${Name} has been updated.` });
                        } else {
                            console.log(err);
                        }
                        console.log('The data from user table: \n', rows)
                    });
                });
            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows)
        });
    });
}

// View user
exports.viewall = (req,res) =>{
    // Router
    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);

        // User the connection
        connection.query('SELECT * FROM user WHERE IDUser = ?',[req.params.id], (err, rows) =>{ // Сюда id пользователя
            // When done with the connection
            connection.release();

            if(!err){
                res.render('view-user', {rows});
            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows)
        });
    });
}


