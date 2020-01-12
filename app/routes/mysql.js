var mysql = require('mysql');
var pool = mysql.createPool({
    host: '192.168.43.119',
    user: 'root',
    password: 'root',
    database: 'ap',
    port: 3306,
});

module.exports = {
    sql(json) {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                return;
            }
            var sql = json.sql;
            connection.query(sql, json.arr, (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                json.data(data);
                connection.release();
            });
        });
    }
}