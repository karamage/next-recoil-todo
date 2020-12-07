import { atom } from 'recoil'

export type TodoState = {
  title: string
  desc: string
}
export type TodosState = {
  todos: TodoState[]
}

const initialState: TodosState = {
  todos: []
}

console.log('test')
export const todosState = atom({
  key: 'todos',
  default: initialState
})