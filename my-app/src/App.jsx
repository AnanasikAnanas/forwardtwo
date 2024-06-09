import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Now from './components/Now'
import Sale from './components/props/Sale'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-[48px]'>
      <Header />
      <Now />
      <Sale />
      <About />
    </div>
  )
}

export default App
