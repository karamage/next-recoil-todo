import { useRecoilState } from 'recoil'
import { todosState, TodoState, TodosState } from '../atoms/todos'

type TodosStore = {
  todos: TodosState
  addTodo: (title: string, desc: string) => void
  deleteTodo: (index: number) => void
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

  const deleteTodo = (index: number) => {
    setTodos((state) => {
      const deleteTodos = ([].concat(state.todos))
      deleteTodos.splice(index, 1)
      return { todos: deleteTodos }
    })
  }

  return {
    todos,
    addTodo,
    deleteTodo
  }
}