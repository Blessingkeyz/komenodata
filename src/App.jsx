import { Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Error from './components/Error'
import Login from './components/Login'
import Register from './components/Register'
import SharedLayout from './components/SharedLayout'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<SharedLayout />} >
          <Route index element={<Register />} />
          <Route path={'login'} element={<Login />} />
          <Route element={<ProtectedRoutes />} >
            <Route path={'dasboard'} element={<Dashboard />} />
          </Route>
          <Route path={'*'} element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
