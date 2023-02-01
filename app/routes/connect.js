let mysql = require('mysql');
let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_ecommerce'
  });
  
  let dayjs = require('dayjs')
  
  conn.connect((err) => {
    if (err) throw err;
    console.log('connected');
  })


module.exports = conn;
