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

// View user
exports.viewall = (req,res) =>{
    // Router
    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);

        // User the connection
        connection.query('SELECT * FROM user WHERE id = ?',[req.params.id], (err, rows) =>{ // Сюда id пользователя
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


