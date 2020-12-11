import React from 'react'

// import Head from 'next/head'
// import styles from '../../styles/Home.module.css'

import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'

export default function Home(): JSX.Element {
  return (
    <div>
      <div>Todo App</div>
      <TodoList />
      <TodoForm />
    </div>
  )
}
