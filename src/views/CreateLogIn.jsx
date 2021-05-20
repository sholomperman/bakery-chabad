import React from 'react'


const CreateLogIn = () => {
    return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-white md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/3 px-6 lg:px-26 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create you account here</h1>
            <form className="mt-" action="#" method="POST">
              <div>
              <label className="block text-gray-700">User Name</label>
              <input type="username" name="" id="" placeholder="Enter User Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required/>
            </div>  
            <div className="mt-4">
              <label className="block text-gray-700">Re Enter Password</label>
              <input type="password" name="" id="" placeholder="Re Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required/>
            </div>  
            <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white     font-semibold rounded-lg px-4 py-3 mt-6">Sign Up
            </button>
            </form>
          <hr className="my-6 border-gray-300 w-full"/>
        </div>
      </div>
    </section>
    )
}

export default CreateLogIn
