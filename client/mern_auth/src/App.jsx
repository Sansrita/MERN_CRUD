import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/' element={<Register/> } />
        <Route path='/' element={<Login/> } />

      </Routes>
    </>
  )
}

export default App
