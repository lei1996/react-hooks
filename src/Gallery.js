import React, { useState, useEffect } from 'react'
import PICTURES from './data/pictures'

function Gallery() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(storedIndex => {
        // 这里storedIndex 拿到的是 index 的值
        console.log('storedIndex', storedIndex)
        return (storedIndex + 1) % PICTURES.length
      })
      //   console.log('(index + 1) % PICTURES.length', (index + 1) % PICTURES.length)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  console.log('index', index)

  return (
    <div className="Gallery">
      <img src={PICTURES[index].image} alt="gallery" />
    </div>
  )
}

export default Gallery
