const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'todo_app',
});

db.connect(err => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    return;
  }
  console.log('MySQL 연결 성공!');
});

app.get('/todos', (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('DB 오류!');
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});

app.post('/todos', (req, res) => {
  const { content, isDone, createdDate, id } = req.body;
  const query = 'INSERT INTO todos (id, content, isDone, createdDate) VALUES (?, ?, ?, ?)';
  db.query(query, [id, content, isDone, createdDate], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('추가 실패');
      return;
    }
    res.status(201).send('추가 성공');
  });
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { content, isDone } = req.body;
  const query = 'UPDATE todos SET content = ?, isDone = ? WHERE id = ?';
  db.query(query, [content, isDone, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('수정 실패');
      return;
    }
    res.send('수정 성공');
  });
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM todos WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('삭제 실패');
      return;
    }
    res.send('삭제 성공');
  });
});
