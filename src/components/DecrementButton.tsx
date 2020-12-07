import React from 'react'
import { useCounter } from '../uses/useCounter'

type Props = void
const DecrementButton: React.FC<Props> = () => {
  const { decrement } = useCounter()
  return (
    <button onClick={() => decrement()}>decrement</button>
  )
}

export default DecrementButton