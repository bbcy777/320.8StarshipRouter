import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Sw from './routes/Sw'
import Ship from './routes/Ship'
import './App.css'


function App() {

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Sw />}/>
        <Route path='/starship/:id' element={<Ship />} />
      </Routes>
      
    </div>
  )
}

export default App
