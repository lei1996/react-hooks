import React from 'react'
import { useAppContext } from './hooks' // 引入自定义 hooks
import CreateReaction from './CreateReaction'

function MessageBoard() {
  // 调用 useAppContext() 将 state 里面的 messages 数组 解构出来
  const {
    state: { messages }
  } = useAppContext()
  return (
    <div>
      {/* 将messages 循环遍历出模版 */}
      {messages.map(messageItem => {
        const { id, text, username, timestamp } = messageItem

        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleString()}</h4>
            <p>{text}</p>
            {/* 添加名字的模版 */}
            <h4> - {username}</h4>
            <CreateReaction />
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default MessageBoard
