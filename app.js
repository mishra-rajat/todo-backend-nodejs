const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const port = 3000
const task = require('./tasks/tasks')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/api/v1/tasks', task.getAllTasks);

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});