import { NEW_MESSAGE, SET_USERNAME } from './types'
import uuid from 'uuid/v4'

// 新消息的装载，传入一个text， 返回一个消息对象 {}
export const newMessage = ({ text, username }) => ({
  type: NEW_MESSAGE,
  item: { id: uuid(), text, username, timestamp: Date.now() }
})

// 设置新name，传入一个username， 返回一个setUsername对象 {}
export const setUsername = username => ({
  type: SET_USERNAME,
  username
})

export const createReaction = ({ type, emoji, username, messageId }) => ({
  type,
  item: { id: uuid(), timestamp: Date.now(), emoji, username, messageId }
})
