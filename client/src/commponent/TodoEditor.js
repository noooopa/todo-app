import React, { useRef, useState } from 'react';
import "./TodoEditor.css";

export default function TodoEditor({ onCreate }) {
    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if (!content.trim()) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) onSubmit();
    };

    return (
        <div className='TodoEditor'>
            <h4>새로운 할 일</h4>
            <div className='editor_wrapper'>
                <input
                    onKeyDown={onKeyDown}
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    placeholder='할 일을 입력하세요...'
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}
