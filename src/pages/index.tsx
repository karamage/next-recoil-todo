import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import CountDisplay from '../components/CountDisplay'
import IncrementButton from '../components/IncrementButton'
import DecrementButton from '../components/DecrementButton'

export default function Home() {
  return (
    <div>
      <div>Counter App</div>
      <CountDisplay />
      <IncrementButton />
      <DecrementButton />
    </div>
  )
}
