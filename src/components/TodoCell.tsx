import React from 'react'
import { TodoState } from '../atoms/todos'
import { useTodos } from '../uses/useTodos'

type Props = {
  todo: TodoState
  index: number
}

const TodoCell: React.FC<Props> = (props: Props) => {
  const {deleteTodo} = useTodos()
  const tapDelete = (index: number) => {
    deleteTodo(index)
  }
  return (
    <li>{props.todo.title} {props.todo.desc} <button onClick={() => tapDelete(props.index)}>削除</button></li>
  )
}

export default TodoCell