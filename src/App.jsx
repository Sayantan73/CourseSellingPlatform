import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Home } from './pages/Home'
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <div className='w-scree h-max bg-richblack-900 flex flex-col'>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>} />
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/dashboard' element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </>
  )
}

export default App
