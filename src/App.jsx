import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Nav from './components/Nav'
import Register from './components/Register'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/dasboard'} element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
