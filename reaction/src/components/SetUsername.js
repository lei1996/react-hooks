import React from 'react'
import { useAppContext } from './hooks'
import { setUsername } from '../state/actions'

function SetUsername() {
  const {
    state: { username },
    dispatch
  } = useAppContext()

  const updateUsername = event => {
    // 这里调用 setUsername() 返回一个 消息对象 回来
    // dispatch 压入 返回的消息体
    dispatch(setUsername(event.target.value))
  }

  return (
    <div>
      <h3>Username</h3>
      <input onChange={updateUsername} value={username} />
    </div>
  )
}

export default SetUsername
