import React, { useState, useEffect } from 'react'
import PICTURES from './data/pictures'

const SECONDS = 1000
const minimumDelay = 1 * SECONDS
const minimumIncrement = 1

function Gallery() {
  const [index, setIndex] = useState(0)
  const [delay, setDelay] = useState(3 * SECONDS)
  const [increment, setIncrement] = useState(1)

  useEffect(() => {
    console.log('delay', delay, 'increment', increment)

    const interval = setInterval(() => {
      setIndex(storedIndex => {
        // 这里storedIndex 拿到的是 index 的值
        console.log('storedIndex', storedIndex)
        return (storedIndex + increment) % PICTURES.length
      })
      //   console.log('(index + 1) % PICTURES.length', (index + 1) % PICTURES.length)
    }, delay)

    return () => {
      // 在移除组件的时候，移除定时器，避免内存泄漏
      clearInterval(interval)
    }
    // [delay, increment] 注册 使里面的参数可以变更检测
  }, [delay, increment])

  const updateDelay = event => {
    const delay = Number(event.target.value) * SECONDS
    // 防止设置小于minimumDelay
    setDelay(delay < minimumDelay ? minimumDelay : delay)
  }

  const updateIncrement = event => {
    const increment = Number(event.target.value)

    setIncrement(increment < minimumIncrement ? minimumIncrement : increment)
  }

  //   console.log('index', index)

  return (
    <div className="Gallery">
      <img src={PICTURES[index].image} alt="gallery" />
      <div className="multiform">
        <div>Gallery 切换延迟 (秒):</div>
        <div>
          Gallery transition delay (seconds):
          <input type="number" onChange={updateDelay} />
        </div>
        <div>Gallery 增量:</div>
        <div>
          Gallery increment:
          <input type="number" onChange={updateIncrement} />
        </div>
      </div>
    </div>
  )
}

export default Gallery
