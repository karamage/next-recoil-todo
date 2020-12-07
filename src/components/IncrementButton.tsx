import { useCounter } from '../uses/useCounter'

const IncrementButton = () => {
  const { increment } = useCounter()
  return (
    <button onClick={() => increment()}>increment</button>
  )
}

export default IncrementButton