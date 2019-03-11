import React from 'react'

import { useFetch } from './hooks'

function Joke() {
  const { setup, punchline } = useFetch('https://official-joke-api.appspot.com/random_joke', {})

  return (
    <div>
      <h3>Joke - 需要梯子（翻墙）</h3>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  )
}

export default Joke
