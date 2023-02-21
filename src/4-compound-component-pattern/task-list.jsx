import React from 'react'
import Task from './task'
import { isImportant } from './hoc-function'

export default function TaskList({ tasks, changeTask, deleteTask }) {
  return (
    <ul>
      {
        tasks.map(item => {
          return (
            <li key={item.id}>
              {
              isImportant(Task, item.text.includes('重要'), {
                task: item, 
                changeTask: changeTask, 
                deleteTask: deleteTask
              })
              }
            </li>
          )
        })
      }
    </ul>
  )
}

TaskList.Task = Task