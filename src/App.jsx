import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar, ProtectedRoute } from './components';
import { Home, Details, Loging, Register } from './pages'; 
import {UserAuthContextProvider} from './context/UserContext'


function App() {

  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <NavBar/>
        
        <Routes>
          <Route path='/' element={
            
              <Home/>
            
          }/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/login' element={<Loging/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  )
}

export default App
