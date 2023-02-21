import React, { useState } from 'react'
import AddTask from './add-task'
import TaskList from './task-list'
import Task from './task'

let nextId = 1

export default function TaskApp() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])
  const [isEditing, setIsEditing] = useState(false)

  const addTask = (text) => {
    if(!text) return
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
      <h1>Render Props Todo List</h1>
      <AddTask addTask={addTask}/>
      <TaskList tasks={tasks}>
        {
          (list) => {
            {
              list.map(item => {
                return (
                  <li key={item.id}>
                    <Task task={item} changeTask={changeTask} deleteTask={deleteTask} />
                    {/* {
                      isImportant(Task, item.text.includes('重要'), {
                        task: item, 
                        changeTask: changeTask, 
                        deleteTask: deleteTask
                      })
                    } */}
                  </li>
                )
              })
            }
          }
        }
      </TaskList>
    </>
  )
}
