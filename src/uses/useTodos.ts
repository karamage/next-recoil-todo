import { useRecoilState } from 'recoil'
import { todosState } from '../atoms/todos'

export const useTodos = () => {
  const [todos, setTodos] = useRecoilState(todosState)
  return {
    todos
  }
}