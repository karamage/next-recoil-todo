import { useRecoilState } from 'recoil'
import { counterState, CounterState } from '../atoms/counter'

type CounterStore = {
  counter: CounterState
  increment: () => void
  decrement: () => void
}

export const useCounter = (): CounterStore => {
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
