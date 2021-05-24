import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {


    return (
    <nav id="header" className="w-full z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400 mt-0">
        <div className="md:flex flex justify-between md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                        <li><Link className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" to="/">Home</Link>
                        </li>
                        <li><Link className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" to="/about">About</Link>
                        </li>
                        <li><Link className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" to="/users">Users</Link>
                        </li>
                        <li><Link className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" to="/LogIn">Log In</Link>
                        </li>
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-6" viewBox="0 0 20 20" >
                    <Link className='fill-current text-blue-500' to="/MyCart">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </Link>
                </svg>
        </div>
    </nav>
    )
}

export default NavBar
