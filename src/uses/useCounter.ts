import { useRecoilState } from 'recoil'
import { counterState } from '../atoms/counter'

export const useCounter = () => {
  const [counter, setCounter] = useRecoilState(counterState)
  const increment = () => {
    setCounter((state) => ({ count: state.count + 1}))
  }
  const decrement = () => {
    setCounter((state) => ({ count: state.count - 1}))
  }
  return {
    counter,
    increment,
    decrement
  }
}
