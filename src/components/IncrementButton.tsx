import React from 'react'
import { useCounter } from '../uses/useCounter'

const IncrementButton: React.FC = () => {
  const { increment } = useCounter()
  return (
    <button onClick={() => increment()}>increment</button>
  )
}

export default IncrementButton