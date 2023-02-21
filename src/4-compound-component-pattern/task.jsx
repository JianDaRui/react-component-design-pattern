import React, { useState } from 'react'

export default function Task({ task, changeTask, deleteTask}) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent = isEditing ? (
    <>
      <input
        value={task.text}
        onChange={(e) => {
          changeTask({
            ...task,
            text: e.target.value,
          });
        }}
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      {task.text}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  )

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          changeTask({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </label>
  );
}

function Button({children, onClick}) {
  return <button onClick={onClick}>{children}</button>
}
function Input(props) {
  return <input {...props}/>
}

Task.DeleteButton = Button
Task.CheckBox = Input