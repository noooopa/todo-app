import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

export default function TodoList({ todo, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => setSearch(e.target.value);

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className='TodoList'>
      <h4>할 일 목록</h4>
      <input
        className="searchbar"
        onChange={onChangeSearch}
        placeholder="검색어 입력"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            {...it}
            key={it.id}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
