import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Now from './components/Now'
import Sale from './components/props/Sale'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/props/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-[48px] font-golos'>
      <Header />
      <Now />
      <Sale />
      <About />
      <Reviews />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
