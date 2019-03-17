import React, { useReducer } from 'react'
import reducer, { initialState } from './state/reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('state', state)

  return (
    <div>
      <h4>Typescript react.</h4>
    </div>
  )
}

export default App
