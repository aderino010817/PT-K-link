import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignupCard from './pages/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route  path='/signup' element={<SignupCard/>}></Route>
      </Routes>
    </>
  )
}

export default App
