import React from 'react'
import { useRouter } from 'next/router'
import { TodoState } from '../atoms/todos'
import { useTodos } from '../uses/useTodos'

type Props = {
  todo: TodoState
  index: number
}

const TodoCell: React.FC<Props> = (props: Props) => {
  const router = useRouter()
  const {deleteTodo} = useTodos()
  const tapDelete = (index: number) => {
    deleteTodo(index)
  }
  const tapEdit = (index: number) => {
    // 編集ページに移動する
    router.push({
      pathname:'/edit',
      query: { index }
    })
  }
  return (
    <li>
      <span>{props.todo.title} {props.todo.desc}</span>
      <span className="m-0.5">
        <button className="btn-blue" onClick={() => tapEdit(props.index)}>編集</button>
      </span>
      <span className="m-0.5">
        <button className="btn-blue" onClick={() => tapDelete(props.index)}>削除</button>
      </span>
    </li>
  )
}

export default TodoCell