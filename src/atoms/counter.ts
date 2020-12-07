import { atom } from 'recoil'

export type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const counterState = atom({
  key: 'counter',
  default: initialState
})