# Todo List 프로젝트

React를 활용한 할 일 관리 앱.  
다크모드 전환, 애니메이션 효과, 반응형 레이아웃 등을 구현.

---

## 📌 주요 기능

- 할 일 추가, 완료 체크, 삭제
- 실시간 검색 필터링
- 다크/라이트 테마 전환
- 반응형 레이아웃 (모바일 대응)
- 날짜 표시: `2025.07.10 (목)` 형식
- 부드러운 애니메이션 적용

---

## 🛠 개발 환경 및 기술 스택

- React (CRA)
- CSS (변수 및 애니메이션)
- Axios
- JSON Server (로컬 백엔드)

---

## 📁 프로젝트 구조

client/
├── public/
│   ├── index.html
│   └── favicon.png
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── component/
│   │   ├── Header.js / Header.css
│   │   ├── TodoEditor.js / TodoEditor.css
│   │   ├── TodoItem.js / TodoItem.css
│   │   └── TodoList.js / TodoList.css
│   ├── reportWebVitals.js
│   └── setupTests.js

server/
├── index.js
├── package.json
└── node_modules/


## ⚙️ 실행 방법

1. 의존성 설치  
```bash
npm install
```

2. 개발 서버 실행  
```bash
npm start
```

---

## 👤 개발자

- 이름: 기묘영영
- 제출처: OO코딩학원 React 실습 과제