// App.js
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import "./App.css"
import Header from './commponent/Header'
import TodoEditor from './commponent/TodoEditor'
import TodoList from './commponent/TodoList'

export default function App() {
  const [todo, setTodo] = useState([]);
  const [theme, setTheme] = useState('dark');
  const idRef = useRef(3);

  useEffect(() => {
    axios.get('http://localhost:5000/todos')
      .then((res) => {
        setTodo(res.data);
        const maxId = res.data.reduce((acc, cur) => Math.max(acc, cur.id), 0);
        idRef.current = maxId + 1;
      })
      .catch((err) => console.error('불러오기 실패:', err));
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    axios.post('http://localhost:5000/todos', newItem)
      .then(() => {
        setTodo([newItem, ...todo]);
        idRef.current += 1;
      })
      .catch((err) => console.error('추가 실패:', err));
  };

  const onUpdate = (targetId) => {
    const target = todo.find((it) => it.id === targetId);
    if (!target) return;

    const updated = { ...target, isDone: !target.isDone };
    axios.put(`http://localhost:5000/todos/${targetId}`, updated)
      .then(() => {
        setTodo(todo.map((it) => it.id === targetId ? updated : it));
      })
      .catch((err) => console.error('업데이트 실패:', err));
  };

  const onDelete = (targetId) => {
    axios.delete(`http://localhost:5000/todos/${targetId}`)
      .then(() => {
        setTodo(todo.filter((it) => it.id !== targetId));
      })
      .catch((err) => console.error('삭제 실패:', err));
  };

  return (
    <div className='App'>
      <Header onToggleTheme={toggleTheme} />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}
