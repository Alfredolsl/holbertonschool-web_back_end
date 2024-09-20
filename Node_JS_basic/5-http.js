const http = require('http'); //include http module
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const database = args[0];

const hostname = "127.0.0.1";
const port = "1245";

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url == '/') {
    res.end('Hello Holberton School!');
  } else if (req.url == '/students') {
    res.write("This is the list of our students\n")
    try {
      const students = await countStudents(database);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port, hostname, () => {
  //console.log("Listening!");
});

module.exports = app;
