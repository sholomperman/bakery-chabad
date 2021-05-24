import react, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { TextField } from '@material-ui/core';

const LogIn = () => {
  const history = useHistory()
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
      
    try {
      const { data } = await axios.post('http://localhost:1337/auth/local', {
            identifier: loginData.username,
            password: loginData.password
      }) 
      localStorage.setItem('token', data.jwt)
      setLoginData({
        username: '',
        password: ''
      })
      history.replace('/')
      console.log("loginData", data)
    } catch (error) {
        console.log(error, 'error');
      }
  }
  const star = '*'

  return (
<section className="flex flex-col md:flex-row h-screen items-center mt-5">
  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">
    <div className="w-full h-100">
      <h1 className="text-xl md:text-2xl font-bold leading-tight my-12 flex justify-center">Log in to your account</h1>
          <form className="mt-6" action="#" method="POST">
            <div className='w-full h-32 flex flex-col justify-between'>
              <TextField
              type="username"
              name="username"
              placeholder={`${star}username`}
              value={loginData.username}
              onChange={handleChange}
              id="username"
              label={`${star}username`}
              variant="outlined"
              />
              <TextField
              type="password"
              name="password"
              placeholder={`${star}Password`}
              value={loginData.password}
              onChange={handleChange}
              id="password"
              label={`${star}Password`}
              variant="outlined"
              />
            </div>
            <p></p>
        <div className="text-right mt-2">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"><Link to="/ForgotPassword" className="text-blue-500 hover:text-blue-700 font-semibold">Forgot Password?</Link></a>
        </div>
        <button onClick={handleSubmit} type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In
        </button>
      </form>
      <hr className="my-6 border-gray-300 w-full"/>
            <p className="mt-8">Need an account? <Link to="/CreateLogIn" className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</Link>
            </p>
    </div>
  </div>
</section>
)}

export default LogIn
