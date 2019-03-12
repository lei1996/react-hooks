import React, { useReducer } from 'react'
import reducer, { initialState } from '../state/reducer'
import Context from '../context' //引入createContext()
import PublishMessage from './PublishMessage'
import MessageBoard from './MessageBoard'

function App() {
  // 创建减速器 state (元数据), dispatch (对数据操作用的) reducer 为函数， initialState为初始化的数据
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('state', state)

  return (
    // 将减速器创建的 state 和 dispatch 传入进去
    <Context.Provider value={{ state, dispatch }}>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  )
}

export default App
