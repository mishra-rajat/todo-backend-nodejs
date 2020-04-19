const Pool = require('pg').Pool
const pool = new Pool({
    host: 'localhost',
    database: 'todo_dev',
    // user: 'username',
    // password: 'password',
    port: 5432,
})

exports.pool = pool;
