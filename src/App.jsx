import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import StudioPage from './pages/StudioPage'
const App = () => {
  return (
    <>
    <Header />
    <Routes>
    <Route path='*' element={<NotFoundPage/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/studio' element={<StudioPage/>} />


    </Routes>
    </>
  )
}

export default App