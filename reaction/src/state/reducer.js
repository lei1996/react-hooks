import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS } from './types'

// 初始化消息数据
export const initialState = {
  messages: [],
  username: 'anonymous',
  reactionsMap: {}
}

const REACTION_TYPES = REACTION_OBJECTS.map(REACTION_OBJECT => REACTION_OBJECT.type)

// 减速器使用的函数
const reducer = (state, action) => {
  if (REACTION_TYPES.includes(action.type)) {
    let reactionsMap
    const { messageId } = action.item
    const messageReactions = state.reactionsMap[messageId]

    if (messageReactions) {
      reactionsMap = {
        ...state.reactionsMap,
        [messageId]: [...messageReactions, action.item]
      }
    } else {
      reactionsMap = {
        ...state.reactionsMap,
        [messageId]: [action.item]
      }
    }

    return { ...state, reactionsMap }
  }

  switch (action.type) {
    case NEW_MESSAGE: // 新消息
      // 返回一个对象， state 解构， messages 数组 解构，末尾添加一个新的 item
      return { ...state, messages: [...state.messages, action.item] }
    case SET_USERNAME: // 设置新的username， 和initialState
      return { ...state, username: action.username }
    default:
      // 返回 state
      return state
  }
}

export default reducer
