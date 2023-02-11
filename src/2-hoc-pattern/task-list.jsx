import React from 'react'
import Task from './task'
import { isOdd } from './hoc-function'

export default function TaskList({ tasks, changeTask, deleteTask }) {
  return (
    <ul>
      {
        tasks.map(item => {
          return (
            <li key={item.id}>
              {
              isOdd(Task, item.id & 1, {
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