import React from 'react';
import "./Header.css";

const formatDateKorean = (date) => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const weekDays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const dayName = weekDays[date.getDay()];
  return `${yyyy}.${mm}.${dd} ${dayName}`;
};

const Header = ({ onToggleTheme }) => {
  return (
    <div className='Header'>
      <h3>오늘은</h3>
      <h1>{formatDateKorean(new Date())}</h1>
      <button className="theme-toggle" onClick={onToggleTheme}>🌓 테마전환</button>
    </div>
  );
};

export default Header;
