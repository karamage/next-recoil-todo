import React from 'react'
import { useCounter } from '../uses/useCounter'

type Props = void
const IncrementButton: React.FC<Props> = () => {
  const { increment } = useCounter()
  return (
    <button onClick={() => increment()}>increment</button>
  )
}

export default IncrementButton