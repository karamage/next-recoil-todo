import React from 'react'
import { useTodos } from '../uses/useTodos'
import TodoCell from './TodoCell'

const TodoList: React.FC = () => {
  const {todos} = useTodos()
  /*
  const tapDelete = (index: number) => {
    deleteTodo(index)
  }
  */
  return (
    <div>
      {todos.todos.map((todo, i) => {
        return <TodoCell key={i} todo={todo} index={i} />
      })}
    </div>
  )
}

export default TodoList