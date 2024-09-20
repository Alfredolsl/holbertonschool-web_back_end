const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

const args = process.argv.slice(2);
const database = args[0];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const students = await countStudents(database);
    res.write('This is the list of our students\n');
    res.send(`${students.join('\n')}`);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(port, () => {
});

module.exports = app;
