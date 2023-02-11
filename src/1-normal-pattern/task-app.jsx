import React, { useState } from 'react'

let nextId =  1

export default function TaskApp() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  
  const addTask = () => {
    setText('')
    setTasks([
      ...tasks,
      {
        text,
        id: nextId++
      }
    ])
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id))
  }
  const changeTask = (task) => {
    setTasks(tasks.map(item => {
      if (item.id === task.id) {
        return task;
      } else {
        return item;
      }
    }))
  }
  return (
    <>
      <h1>Normal Todo List</h1>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {
          tasks.map(task => (
            <li key={task.id}>
              <label>
                {
                  isEditing ? (
                    <>
                      <input type="text" value={task.text} onChange={(e) => {
                        changeTask({
                          ...task,
                          text: e.target.value
                        })
                      }} />
                      <button onClick={() => setIsEditing(false)}>Save</button>
                    </>
                  ) : (
                    <>
                      {task.text}
                      <button onClick={() => setIsEditing(true)}>Edit</button>
                    </>
                  )
                }
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </label>
            </li>
          ))
        }
      </ul>
    </>
  )
}
