import React, { useState } from 'react'
import { useAppContext } from './hooks' // 引入自定义 hooks
import { newMessage } from '../state/actions' //newMessage(text) 需要传入一个text进行消息的装载

function PublishMessage() {
  // 调用 useAppContext() 将 App.js 文件传入的 pubsub 对象中的 publish() 解构出来
  const {
    pubsub: { publish }
  } = useAppContext()
  // 创建一个text 的useState
  const [text, setText] = useState('')

  // 更新text的值
  const updateText = event => {
    setText(event.target.value)
  }

  // 将新消息用dispatch推进去，这里的 dispatch 是从App.js传入的，创建的一个减速器
  //newMessage(text) 需要传入一个text进行消息的装载， 返回一个新消息对象
  const publishMessage = () => {
    publish(newMessage(text))
  }

  // 回车发送消息
  const handleKeyPress = event => {
    if (event.key === 'Enter') publishMessage()
  }

  return (
    <div>
      <h3>小哥哥，聊天吗？</h3>
      <input value={text} onChange={updateText} onKeyPress={handleKeyPress} />
      {'  '}
      <button onClick={publishMessage}>发送</button>
    </div>
  )
}

export default PublishMessage
