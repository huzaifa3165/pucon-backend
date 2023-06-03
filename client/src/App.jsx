import React from 'react'
import Register from './Components/Auths/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Auths/Login'
import Dashboard from './Components/Pages/Dashboard'
import JoinedEvents from './Components/Pages/JoinedEvents'
import UserPage from './Components/Pages/UserPage'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/JoinedEvents' element={<JoinedEvents />} />
          <Route path='/Account' element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App