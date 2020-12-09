import React, { useState } from 'react'
import { useTodos } from '../uses/useTodos'

const TodoForm: React.FC = () => {
  const {addTodo} = useTodos()
  const [title, setTitle] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const tapAdd = () => {
    addTodo(title, '')
  }
  return (
    <div>
      <input type="text" value={title} onChange={handleChange} />
      <button onClick={tapAdd}>追加</button>
    </div>
  )
}

export default TodoForm