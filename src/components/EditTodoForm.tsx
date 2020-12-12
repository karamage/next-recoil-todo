import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { TodoState } from '../atoms/todos'
import { useTodos } from '../uses/useTodos'

type Props = {
  index: number
  todo: TodoState
}

const EditTodoForm: React.FC<Props> = (props: Props) => {
  const { updateTodo } = useTodos()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const router = useRouter()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value)
  }
  const tapCencel = () => {
    router.push('/')
  }
  const tapSave = () => {
    updateTodo(props.index, title, desc)
    router.push('/')
  }

  useEffect(() => {
    setTitle(props.todo.title)
    setDesc(props.todo.desc)
  }, [])
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
      <span className="m-0.5">
        <button className="btn-blue" onClick={tapSave}>保存</button>
      </span>
      <span className="m-0.5">
        <button className="btn-blue" onClick={tapCencel}>キャンセル</button>
      </span>
    </div>
  )
}

export default EditTodoForm