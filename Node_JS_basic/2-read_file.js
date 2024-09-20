const fs = require('fs');

function countStudents(path) {
  let content;

  try {
    content = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  content = content.toString().split('\n');
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
  console.log(fields);

  for (const key in fields) {
    if (Object.hasOwn(fields, key)) {
      console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
    }
  }
}

module.exports = countStudents;
