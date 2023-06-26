import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components';
import { Home, Details, Loging, Register } from './pages'; 


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/login' element={<Loging/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
