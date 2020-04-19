const database = require('../database')

const getAllTasks = (request, response) => {
    sql = 'SELECT * FROM tasks ORDER BY id ASC'
    database.pool.query(sql, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getAllTasks
}