import React, { useState } from 'react'

export default function AddTask({ addTask }) {
  const [text, setText] = useState('')
  return (
    <>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => {
        setText('')
        addTask(text)
      }}>Add</button>
    </>
  )
  
}