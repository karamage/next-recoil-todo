
import React from 'react'
import { useRouter } from 'next/router'

export default function Home(): JSX.Element {
  // ダイナミックルートを使うように変えてみる
  const router = useRouter()
  return (
    <div>
      <div>Edit page index={router.query.index}</div>
    </div>
  )
}
