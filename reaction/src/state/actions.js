import { NEW_MESSAGE } from './types'
import uuid from 'uuid/v4'

// 新消息的装载，传入一个text， 返回一个消息对象 {}
export const newMessage = text => ({
  type: NEW_MESSAGE,
  item: { id: uuid(), text, timestamp: Date.now() }
})
