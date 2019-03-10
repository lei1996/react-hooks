import React, { useState } from 'react'
import uuid from 'uuid/v4'

function Tasks() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  const updateTaskText = event => {
    setTaskText(event.target.value)
    // console.log(taskText)
  }

  const addTask = () => {
    console.log(taskText)
    setTasks([...tasks, { taskText, id: uuid() }])
    console.log(tasks)
  }

  const completeTask = completedTask => () => {
    // 将任务 添加到已完成的数组内。
    setCompletedTasks([...completedTasks, completedTask])
    // 重新赋值tasks， 过滤传入的completedTask
    setTasks(tasks.filter(task => task.id !== completedTask.id))
  }

  const deleteTask = task => () => {
    setCompletedTasks(completedTasks.filter(t => t.id !== task.id))
    // setTasks([...tasks, task])
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
          return (
            <div key={id} onClick={completeTask(task)}>
              {taskText}
            </div>
          )
        })}
        <div className="completed-list">
          {completedTasks.map(task => {
            const { id, taskText } = task

            return (
              <div key={id}>
                {taskText} {'  '}{' '}
                <span onClick={deleteTask(task)} className="delete-task">
                  x
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Tasks
