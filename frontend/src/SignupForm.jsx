import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function SignupForm() {
  const [user, setUser] = useState([])
  const [username, setUserName] = useState('')
  const [password, setUserPass] = useState('')

  const handleSignupBtn = (e) => {
    e.preventDefault()
    if(!username || !password){
      alert('Please enter new account')
      return
    }

    axios.post('http://localhost:3009/createUsers', {
      email: username, password: password
    })
    .then(result => {
      setUser([...user, result.data.user])
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <form onSubmit={handleSignupBtn}>
            <div className="flex justify-center items-center h-200">
            <div className="ring shadow-xl ring-gray-900/5 flex-col w-110 h-120 rounded">
                <div className="flex justify-center items-center align-middle text-4xl font-semibold text-black h-30">Signup</div>
                <div className="flex flex-col justify-center items-center gap-5 not-odd:h-70">
                <input 
                  className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-gray-700 py-3 px-2 w-70 border border-gray-400 rounded"
                  type="text" 
                  placeholder="Enter email or username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}/>
                <input
                  className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-gray-700 py-3 px-2 w-70 border border-gray-400 rounded" 
                  type="password" 
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setUserPass(e.target.value)}/>
                <div className='flex w-70 items-center gap-1'>
                </div>
                  <button className="active:bg-sky-500 bg-sky-500 hover:bg-sky-700 text-white py-3 px-20 rounded text-lg cursor-pointer">Signup</button>
                  <div>
                    <Link 
                      className='text-sky-500 hover:text-sky-700 active:text-sky-500'
                      to='/'>Back to Login</Link>
                  </div>
                </div>
            </div>
        </div>
      </form>
    </>
  )
}

