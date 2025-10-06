const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const db = require('mysql');
const connection = db.createConnection(config);

app.get('/', (req, res) => {
  const sql = 'INSERT INTO people(name) values("John")';
  connection.query(sql);

  connection.query('SELECT * FROM people', (err, results) => {
    if (err) throw err;

    let msg = '<h1>Full Cycle Rocks!</h1>';
    msg += '<h4>Results:</h4>';
    msg += '<ul>';
    results.forEach(person => {
      msg += '<li>' + person.id + ' - ' + person.name + '</li>';
    });
    msg +='</ul>';
    res.send(msg);
  });

});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});