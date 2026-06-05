import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Dashboard from './Dashboard'
function App() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/signup' element={<SignupForm />}/>
          <Route path='/success' element={<Dashboard />}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
