import React from 'react'
import { useTodos } from '../uses/useTodos'

const TodoList: React.FC = () => {
  const {todos, deleteTodo} = useTodos()
  const tapDelete = (index: number) => {
    deleteTodo(index)
  }
  return (
    <div>
      {todos.todos.map((todo, i) => {
        return <li key={i}>{todo.title} {todo.desc} <button onClick={() => tapDelete(i)}>削除</button></li>
      })}
    </div>
  )
}

export default TodoList