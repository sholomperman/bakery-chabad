import react, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { TextField } from '@material-ui/core';



const CreateLogIn = () => {

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  })
  
    const handleChange = e => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
      
      try {
        const api = async () => {
          const { data } = await axios.post('http://localhost:1337/auth/local/register', {
            firstName: registerData.firstName,
            lastName: registerData.lastName,
            username: registerData.username,
            email: registerData.email,
            password: registerData.password
          });
          setRegisterData({
            lastName: '',
            firstName: '',
            email: '',
            username: '',
            password: ''
          });
        };
        api();
      } catch (error) {
        console.log(error);
      }
  }

    console.log('registerData', registerData)

    return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-white md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/3 px-6 lg:px-26 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className=" flex justify-center text-xl md:text-2xl font-bold leading-tight mb-4">Create you account here</h1>
            <form className="mt-" action="#" method="POST">
              <div className='h-80 flex flex-col justify-between'>
              <div>
              <TextField
              className='w-full'
              type="text"
              name="firstName"
              placeholder="First Name"
              value={registerData.firstName}
              onChange={handleChange}
              id="firstName"
              label="First Name"
              variant="outlined"
                />
              </div>
              <div>
              <TextField
              className='w-full'
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={registerData.lastName}
              onChange={handleChange}
              id="lastName"
              label="Last Name"
              variant="outlined"
                />
              </div>
              <div>
              <TextField
              className='w-full'
              type="username"
              name="username"
              placeholder="Username"
              value={registerData.username}
              onChange={handleChange}
              id="username"
              label="Username"
              variant="outlined"
                />
            </div>  
              <div>
              <TextField
              className='w-full'
              type="email"
              name="email"
              placeholder="Email"
              value={registerData.email}
              onChange={handleChange}
              id="email"
              label="Email"
              variant="outlined"
                />
            </div>
            <div>
              <TextField
              className='w-full'
              type="password"
              name="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleChange}
              id="password"
              label="Password"
              variant="outlined"
                />
            </div>
              </div>
            <button onClick={handleSubmit} type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Sign Up
            </button>
            </form>
          <hr className="my-6 border-gray-300 w-full"/>
        </div>
      </div>
    </section>
    )
}

export default CreateLogIn
