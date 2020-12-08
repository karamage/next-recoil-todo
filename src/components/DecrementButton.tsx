import React from 'react'
import { useCounter } from '../uses/useCounter'

const DecrementButton: React.FC = () => {
  const { decrement } = useCounter()
  return (
    <button onClick={() => decrement()}>decrement</button>
  )
}

export default DecrementButton