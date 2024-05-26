import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Contact } from './Pages/Contact'
import './App.css'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />    
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
