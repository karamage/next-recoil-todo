import React, { useState } from 'react'
import { useTodos } from '../uses/useTodos'

const TodoForm: React.FC = () => {
  const {addTodo} = useTodos()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value)
  }
  const clearInput = () => {
    setTitle('')
    setDesc('')
  }
  const tapAdd = () => {
    addTodo(title, desc)
    clearInput()
  }
  return (
    <div>
      <input type="text" value={title} onChange={handleChange} />
      <input type="text" value={desc} onChange={handleDescChange} />
      <button onClick={tapAdd}>追加</button>
      <button onClick={clearInput}>クリア</button>
    </div>
  )
}

export default TodoForm