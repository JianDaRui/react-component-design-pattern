import React from 'react'
import Task from './task'
import { isImportant } from './hoc-function'

const BlackListTask = ['约会', '打飞机']

export default function TaskList({ children, tasks}) {

  const filterTasks = tasks.filter(task => !BlackListTask.includes(task.text))
  console.log(filterTasks)
  return (
    <ul>
      {
        children(filterTasks)
      }
    </ul>
  )
}