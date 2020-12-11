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
  const tapEdit = (index: number) => {
    // TODO 編集ページに移動する
  }
  return (
    <li>
      <span>{props.todo.title} {props.todo.desc}</span>
      <button onClick={() => tapEdit(props.index)}>編集</button>
      <button onClick={() => tapDelete(props.index)}>削除</button>
    </li>
  )
}

export default TodoCell