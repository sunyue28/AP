var express = require('express');
var mysql = require('./mysql')
var router = express.Router();

/* GET home page. */
router.post('/in', function (req, res) {
  var json = req.body;
  console.log(json)
  mysql.sql({
    sql: `select * from login where user=${json.username} and password=${json.password}`,
    data(data) {
      if (data.length) {
        res.send({
          ok: 0,
          data: data
        });
      } else {
        res.send({
          ok: 1,
          data: ''
        });
      }
    }
  });
});

router.post('/up', function (req, res) {
  var json = req.body;
  mysql.sql({
    sql: `select * from login where user=${json.username}`,
    data(data) {
      if (data.length == 0) {
        mysql.sql({
          sql: 'insert into login (user,password) values(?,?)',
          arr: [json.username, json.password],
          data(data) {
            res.send({
              ok: 0,
              data: data
            });
            // 获取资料
            // mysql.sql({
            //   sql: `select * from login where user=${data.insertId}`,
            //   data(data) {
            //     res.send({
            //       ok: 0,
            //       data: data
            //     });
            //   }
            // })
          }
        })
      } else {
        res.send({
          ok: 1
        })
      }
    }
  })

});

module.exports = router;
