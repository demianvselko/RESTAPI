const { get } = require("../routes/tasks.routes");
const { getConnection } = require("../database");

const getTasks = (req, res) => {
    const tasks = getConnection().get('tasks').value();
    res.send('received');
};

const createTask = (req, res) => {
    console.log(req.body);
    res.send('received');
};

module.exports = { getTasks, createTask };