import React from 'react'
import { useTodos } from '../uses/useTodos'

type Props = void

const TodoList: React.FC<Props> = () => {
  const {todos} = useTodos()
  return (
    <div>
      {todos.todos.map((todo, i) => {
        return <li key={i}>{todo.title}</li>
      })}
    </div>
  )
}

export default TodoList