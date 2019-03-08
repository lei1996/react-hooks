import React, { useState } from 'react'

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
    window.open(`https://www.baidu.com/s?wd=${userQuery}`)
  }

  return (
    <div className="App">
      <h1>Hello David</h1>
      <div className="form">
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>搜索</button>
      </div>
    </div>
  )
}

export default App
