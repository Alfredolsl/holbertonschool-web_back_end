import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res, database) {
    readDatabase(database)
      .then((fields) => { // uses returned promise from readDatabase
        const students = [];
        students.push('This is the list of our students');

        let msg;
	
        for (const key in fields) {
          if (Object.hasOwn(fields, key)) {
            msg = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
            students.push(msg);
	  }
	}

	res.status(200).send(`${students.join('\n')}\n`);
      });
  }

  static getAllStudentsByMajor(req, res, database) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(database)
        .then((fields) => {
          const students = fields[major];

          res.status(200).send(`List: ${students.join(', ')}`);
        })
      .catch(() => res.status(500).send('Cannot load the database'));
    }
  }
}

export default StudentsController;
