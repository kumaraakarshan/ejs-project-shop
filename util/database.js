const mysql =require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    database:'node-complete',
    password:'123456'

});

module.export=pool.promise();