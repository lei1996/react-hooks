import { NEW_MESSAGE } from './types'

export const initialState = { messages: [] }

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.item] }

    default:
      return state
  }
}
export default reducer
