import { useRecoilState } from 'recoil'
import { todosState, TodoState, TodosState } from '../atoms/todos'

type TodosStore = {
  todos: TodosState
  addTodo: (title: string, desc: string) => void
}

export const useTodos = (): TodosStore => {
  const [todos, setTodos] = useRecoilState(todosState)
  const addTodo = (title: string, desc: string) =>  {
    const todo: TodoState = { title, desc }
    setTodos((state) => {
      const newTodos = ([].concat(state.todos))
      newTodos.unshift(todo)
      return { todos: newTodos }
    })
  }
  return {
    todos,
    addTodo
  }
}