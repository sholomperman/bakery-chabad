import React, { useState} from 'react'
import axios from 'axios'
import { TextField } from '@material-ui/core';
import Footer from '../components/Footer';






const ForgotPassword = () => {

  const [loginData, setLoginData] = useState({
    username: ''
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
      const { data } = await axios.post('https://chabad-bayek.herokuapp.com/auth/forgot-password', {
            email: loginData.email
      })
      console.log("loginData", data)
    } catch (error) {
        console.log(error);
      }
    }

    

    return (
        <>
            <section className="flex flex-col md:flex-row h-screen items-center mt-5">
  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">
    <div className="w-full h-100">
      <h1 className=" md:text-2xl font-bold leading-tight my-12 flex justify-center">Reset Your Password</h1>
          <form className="mt-6" action="#" method="POST">
            <div className='w-full flex flex-col justify-between'>
              <TextField
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
              id="email"
              label="*Email"
              variant="outlined"
              />
                </div>
                <p className='text-xl flex justify-center mt-5'>You will get an email with instructions</p>
                <p className='flex justify-center mt-5'>thank you for your support</p>
        <button onClick={handleSubmit} type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-14">Send
        </button>
      </form>
    </div>
  </div>
</section>
<Footer />
        </>
    )
}

export default ForgotPassword
