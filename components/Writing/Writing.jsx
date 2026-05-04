import { useState } from 'react'
import './Writing.css'

function Writing({ handleAddPost }) {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  return (
        <div className="writing">
          <div className="new_writing">
            글 작성하기
          </div>
            <input placeholder="제목" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
            <input placeholder="내용" onChange={(e) => setNewContent(e.target.value)} value={newContent} />
            <button
                onClick={() => {
                    handleAddPost(newTitle, newContent);
                    setNewTitle('');
                    setNewContent('');
                }}
            >
                글 추가
            </button>
        </div>
  )
}

export default Writing
