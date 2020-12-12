
import React from 'react'
import { useRouter } from 'next/router'
import EditTodoForm from '../components/EditTodoForm'
import { useTodos } from '../uses/useTodos'

export default function Home(): JSX.Element {
  const router = useRouter()
  const { todos } = useTodos()
  const index = Number(router.query.index)
  const editTodo = todos.todos[index]
  return (
    <div>
      <div className="title">編集画面</div>
      <EditTodoForm index={index} todo={editTodo}/>
    </div>
  )
}
