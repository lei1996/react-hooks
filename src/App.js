import React, { useState } from 'react'
import Joke from './Joke'
import Stories from './Stories'
import Tasks from './Tasks'
import Gallery from './Gallery'

function App() {
  const [userQuery, setUserQuery] = useState('')

  const updateUserQuery = event => {
    setUserQuery(event.target.value)
    console.log('userQuery', userQuery)
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
        {userQuery}
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <Gallery />
      <hr />
      <Stories />
    </div>
  )
}

export default App
