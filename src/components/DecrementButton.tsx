import { useCounter } from '../uses/useCounter'

const DecrementButton = () => {
  const { decrement } = useCounter()
  return (
    <button onClick={() => decrement()}>decrement</button>
  )
}

export default DecrementButton