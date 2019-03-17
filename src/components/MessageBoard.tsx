import React from 'react'
import { useAppContext } from './hooks'

function MessageBoard() {
  const {
    state: { messages }
  } = useAppContext()
  return (
    <div>
      {/* 将messages 循环遍历出模版 */}
      {messages.map((messageItem: any) => {
        const { id, text, timestamp } = messageItem

        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleString()}</h4>
            <p>{text}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default MessageBoard
