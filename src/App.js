import React, { useState } from 'react'
import Joke from './Joke'
import Stories from './Stories'
import Tasks from './Tasks'
import Gallery from './Gallery'

function App() {
  const [userQuery, setUserQuery] = useState('')
  const [showGallery, setShowGallery] = useState(true)

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

  const toggleShowGallery = () => {
    setShowGallery(!showGallery)
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
      <div>
        {showGallery ? <Gallery /> : null}
        <button onClick={toggleShowGallery}>{showGallery ? '隐藏' : '显示'} Gallery</button>
      </div>
      <hr />
      <Stories />
    </div>
  )
}

export default App
