require("dotenv").config();
const mysql=require('mysql');
const createconnnection=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.MYSQL_DB,
    password:process.env.DB_PASS
});
module.exports=createconnnection;