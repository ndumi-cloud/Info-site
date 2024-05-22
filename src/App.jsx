/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  const [count] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
    </>
  )
}

export default App
