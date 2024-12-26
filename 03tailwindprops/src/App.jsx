import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

let obj = {
  username: "idkman",
  password: "nicaragua"
}

function App() {
  return (
    <>
      <h1 className='bg-green-600 text-blue-800 p-3 mr-auto rounded-3xl mb-10'>tailwind test</h1>
      <Card username="sarah" someObject={obj} />
      <Card username="nikolas"/>
    </>
  )
}

export default App
