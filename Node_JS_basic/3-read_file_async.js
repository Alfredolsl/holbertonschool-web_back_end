const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      let content = data.toString().split('\n');
      content = content.slice(1, -1);

      console.log(`Number of students: ${content.length}`);

      // count number of students in specific field
      const fields = {};
      for (const i in content) {
        if (Object.hasOwn(content, i)) {
          const field = content[i].split(',')[3];
          const name = content[i].split(',')[0];
          if (!(field in fields)) {
            fields[field] = [];
          }
          fields[field].push(name);
        }
      }

      for (const key in fields) {
        if (Object.hasOwn(fields, key)) {
          console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
        }
      }
      resolve(content);
    }); // end of readFile
  }); // end of promise
}

module.exports = countStudents;
