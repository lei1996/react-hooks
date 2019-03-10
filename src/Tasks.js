import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4'

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY'

const storeTasks = taskMap => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(taskMap))
}

const readStoredTasks = () => {
  const taskMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY))
  return taskMap ? taskMap : { tasks: [], completedTasks: [] }
}

// let i = 0

function Tasks() {
  const [taskText, setTaskText] = useState('')
  const storedTasks = readStoredTasks()
  const [tasks, setTasks] = useState(storedTasks.tasks)
  const [completedTasks, setCompletedTasks] = useState(storedTasks.completedTasks)

  useEffect(() => {
    storeTasks({ tasks, completedTasks })
  })

  // if (i % 2 === 0) {
  //   ;[tasks, setTasks] = useState([])
  //   ;[completedTasks, setCompletedTasks] = useState([])
  // } else {
  //   let [foo, setFoo] = useState([])
  //   let [bar, setBar] = useState([])
  //   tasks = foo
  //   setTasks = setFoo
  //   completedTasks = bar
  //   setCompletedTasks = setBar
  // }

  // // 这里测试了，i的值，在每次输入和 点击click 都会刷新他的值
  // i++
  // console.log(i)

  const updateTaskText = event => {
    setTaskText(event.target.value)
  }

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }])
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
