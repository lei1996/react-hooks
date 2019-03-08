import React, { useState } from 'react'
import Joke from './Joke'
import Stories from './Stories'

function App() {
  const [userQuery, setUserQuery] = useState('')

  const updateUserQuery = event => {
    console.log('userQuery', userQuery)
    setUserQuery(event.target.value)
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery()
    }
  }

  const searchQuery = () => {
    window.open(`https://www.baidu.com/s?wd=${userQuery}`, '_blank')
  }

  return (
    <div className="App">
      <h1>Hello David</h1>
      <div className="form">
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>搜索</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Stories />
    </div>
  )
}

export default App
