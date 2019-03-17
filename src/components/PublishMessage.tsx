import React, { useState } from 'react'
import { newMessage } from '../state/actions'

function PublishMessage(props: any) {
  const { dispatch } = props

  const [text, setText] = useState('')

  const updateText = (event: any) => {
    setText(event.target.value)
  }

  const publishMessage = () => {
    dispatch(newMessage(text))
  }

  const handelKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      publishMessage()
    }
  }

  return (
    <div>
      <h3>Got something to say?</h3>
      <input value={text} onChange={updateText} onKeyPress={handelKeyPress} />
      {'  '}
      <button onClick={publishMessage}>Publish it!</button>
    </div>
  )
}
export default PublishMessage
