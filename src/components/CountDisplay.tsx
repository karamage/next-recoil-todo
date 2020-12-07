import React from 'react'
import { useCounter } from '../uses/useCounter'

const CountDisplay = () => {
  const { counter } = useCounter()
  return (
  <div>{ counter.count }</div>
  )
}

export default CountDisplay