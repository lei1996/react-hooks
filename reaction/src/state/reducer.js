import { NEW_MESSAGE } from './types'

// 初始化消息数据
export const initialState = { messages: [] }

// 减速器使用的函数
const reducer = (state, action) => {
  switch (action.type) {
    case NEW_MESSAGE: // 新消息
      // 返回一个对象， state 解构， messages 数组 解构，末尾添加一个新的 item
      return { ...state, messages: [...state.messages, action.item] }

    default:
      // 返回 state
      return state
  }
}

export default reducer
