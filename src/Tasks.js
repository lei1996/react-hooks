import React, { useState, useEffect, useReducer } from 'react'
import uuid from 'uuid/v4'

// 初始化数据
const initialTasksState = {
  tasks: [],
  completedTasks: []
}

// 声明 action 的几种case
const TYPES = {
  ADD_TASK: 'ADD_TASK',
  COMPLETE_TASK: 'COMPLETE_TASK',
  DELETE_TASK: 'DELETE_TASK'
}

// 减速器
const tasksReducer = (state, action) => {
  // 这里 state 是操作之前的数据， action是传递进来的数据，用于修改原state
  console.log('state', state, 'action', action)

  switch (action.type) {
    case TYPES.ADD_TASK:
      return {
        // 添加task 到 tasks 中
        ...state, // 数组展开，里面包括有原来的tasks
        tasks: [...state.tasks, action.task] // 用新的tasks 替代旧的，新的数组展开 push进了一个新的task
      }
    case TYPES.COMPLETE_TASK:
      const { completedTask } = action

      return {
        // 将tasks数组里面的task 添加到 completedTasks 数组中
        ...state, // 数组展开，里面包括有原来的tasks
        completedTasks: [...state.completedTasks, completedTask], //展开state.completedTasks数组， 将新的completedTask 数据 推进去
        tasks: state.tasks.filter(t => t.id !== completedTask.id) // 从state.tasks移除 选定的 completedTask 数据
      }
    case TYPES.DELETE_TASK:
      return {
        // 将completedTasks数组里面的已完成的task 删除
        ...state, // 数组展开，里面包括有原来的tasks
        completedTasks: state.completedTasks.filter(t => t.id !== action.task.id) // 从 state.completedTasks 中 移除已完成的任务
      }

    default:
      // 返回一个 state
      return state
  }
}

// 本地缓存的key
const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY'

// 将 taskMap 写入 localstorage 中
const storeTasks = taskMap => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(taskMap))
}

// 通过key 读取 localstorage 里面的数据, 如果本地缓存为空，返回一个初始化的 initialTasksState
const readStoredTasks = () => {
  const taskMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY))
  return taskMap ? taskMap : initialTasksState
}

function Tasks() {
  const [taskText, setTaskText] = useState('')
  // 获取 localstorage 里面的 task
  const storedTasks = readStoredTasks()

  // 使用减速器， 传入 tasksReducer 函数，和本地缓存中的 task
  const [state, dispatch] = useReducer(tasksReducer, storedTasks)
  // state 对象解构，
  const { tasks, completedTasks } = state

  useEffect(() => {
    // 将tasks 和 completedTasks 写入到 localstorage 中
    storeTasks({ tasks, completedTasks })
    // 这里一定不能传入第二个 []， 因为它需要循环检测
    console.log('这里一定不能传入第二个 []， 因为它需要循环检测')
  })

  // 获取 input 的输入， 用hooks 设置TaskText值
  const updateTaskText = event => {
    setTaskText(event.target.value)
  }

  // 添加任务
  const addTask = () => {
    dispatch({ type: TYPES.ADD_TASK, task: { taskText, id: uuid() } })
  }

  // 将任务拖入到已完成的任务数组
  const completeTask = completedTask => () => {
    dispatch({ type: TYPES.COMPLETE_TASK, completedTask })
  }

  // 将任务从已完成的任务数组中删除
  const deleteTask = task => () => {
    dispatch({ type: TYPES.DELETE_TASK, task })
  }

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
