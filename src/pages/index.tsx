import React from 'react'

// import Head from 'next/head'
// import styles from '../../styles/Home.module.css'

import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'

export default function Home(): JSX.Element {
  return (
    <div>
      <div className="hero">
        <div className="title">Todo App</div>
        <p className="text-center text-teal-500 text-2xl py-4">This is an Example.</p>
      </div>
      <TodoList />
      <TodoForm />
    </div>
  )
}
