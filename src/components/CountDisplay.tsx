import React from 'react'
import { useCounter } from '../uses/useCounter'

type Props = void

const CountDisplay: React.FC<Props> = () => {
  const { counter } = useCounter()
  return (
  <div>{ counter.count }</div>
  )
}

export default CountDisplay