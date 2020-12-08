import React from 'react'

/*
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import CountDisplay from '../components/CountDisplay'
import IncrementButton from '../components/IncrementButton'
import DecrementButton from '../components/DecrementButton'
*/

import TodoList from '../components/TodoList'

export default function Home(): JSX.Element {
  return (
    <div>
      <div>Todo App</div>
      <TodoList/>
    </div>
  )
}
