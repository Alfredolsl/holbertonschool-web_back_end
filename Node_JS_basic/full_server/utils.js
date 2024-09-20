const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database.'));
        return;
      }

      let content = data.toString().split('\n');
      content = content.slice(1, -1);

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

      resolve(fields);
    }); // end of readfile
  }); // end of promise
}

export default readDatabase;
