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
      <label htmlFor="title_input" className="block text-sm font-medium text-gray-700">
        Title
      </label>
      <div className="border mt-1 flex rounded-md shadow-sm">
        <input type="text" className="form-text-input" value={title} onChange={handleChange} />
      </div>
      <label htmlFor="desc_input" className="block text-sm font-medium text-gray-700">
        Description
      </label>
      <div className="border mt-1 flex rounded-md shadow-sm">
        <input type="text" value={desc} onChange={handleDescChange} />
      </div>
      <button onClick={tapAdd}>追加</button>
      <button onClick={clearInput}>クリア</button>
    </div>
  )
}

export default TodoForm