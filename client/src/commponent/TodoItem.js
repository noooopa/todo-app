import "./TodoItem.css";

const formatDateKorean = (date) => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const weekDaysShort = ['일', '월', '화', '수', '목', '금', '토'];
  const dayShort = weekDaysShort[date.getDay()];
  return `${yyyy}.${mm}.${dd} (${dayShort})`;
};

export default function TodoItem({ id, content, isDone, createdDate, onUpdate, onDelete }) {
  const onChangeCheckbox = () => onUpdate(id);
  const onClickDelete = () => onDelete(id);

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{formatDateKorean(new Date(createdDate))}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
}
