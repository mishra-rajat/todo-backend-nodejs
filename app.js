const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const task = require('./tasks/tasks');
const origins = require('./cors');
const app = express();
const port = 3000;

app.use(cors(origins.corsOptions))
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