import { useContext } from 'react'
import Context from '../context' //引入createContext()

export const useAppContext = () => {
  // 自定义useContext hooks. 传入createContext()
  return useContext(Context)
}
