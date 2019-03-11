import { useState, useEffect } from 'react'

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setResult(json))
  }, [])

  return result
}

export const useDynamicTransition = ({ increment, delay, length }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(storedIndex => {
        // 这里storedIndex 拿到的是 index 的值
        console.log('storedIndex', storedIndex)
        return (storedIndex + increment) % length
      })
      //   console.log('(index + 1) % PICTURES.length', (index + 1) % PICTURES.length)
    }, delay)

    // 在移除组件的时候，移除定时器，避免内存泄漏
    return () => clearInterval(interval)

    // [delay, increment] 注册 使里面的参数可以变更检测
  }, [delay, increment])

  return index
}
