import { useState } from 'react'
import './App.css'
import { LoginPage } from './assets/Pages/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './assets/Pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes path="/*">
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/*" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
