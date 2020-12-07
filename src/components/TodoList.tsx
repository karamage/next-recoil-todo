import { useTodos } from '../uses/useTodos'

const TodoList = () => {
  const {todos} = useTodos()
  return (
    <div>
      {todos.todos.map((todo) => {
        return <li>{todo.title}</li>;
      })}
    </div>
  )
}

export default TodoList