import React, { useReducer, useEffect } from 'react'
import reducer, { initialState } from '../state/reducer'
import Context from '../context' //引入createContext()
import PubSub from '../pubsub'
import PublishMessage from './PublishMessage'
import MessageBoard from './MessageBoard'

const pubsub = new PubSub()

function App() {
  // 创建减速器 state (元数据), dispatch (对数据操作用的) reducer 为函数， initialState为初始化的数据
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    // 监听消息
    pubsub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject

        console.log('Received message', message, 'channel', channel)

        // 往本地 state 里面 push 消息
        dispatch(message)
      }
    })
  }, [])

  console.log('state', state)

  return (
    // 将减速器创建的 state 和 dispatch 和 pubsub 对象实例 传入进去
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  )
}

export default App
