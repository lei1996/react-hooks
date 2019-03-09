import React, { useState } from 'react'
import uuid from 'uuid/v4'

function Tasks() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  const updateTaskText = event => {
    setTaskText(event.target.value)
  }

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }])
  }

  console.log('tasks', tasks)

  return (
    <div>
      <h3>Tasks 要做的任务</h3>
      <div className="form">
        <input value={taskText} onChange={updateTaskText} />
        <button onClick={addTask}>添加计划</button>
      </div>
      <div className="task-list">
        {tasks.map(task => {
          const { id, taskText } = task
          return <div key={id}>{taskText}</div>
        })}
      </div>
    </div>
  )
}

export default Tasks