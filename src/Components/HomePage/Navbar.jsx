import React from 'react'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className=' h-18'>
                <div className='relative flex items-center w-[90%] mx-auto h-full'>
                    <div >
                        <img src={logo} alt="" className='w-20' />
                    </div>
                    <ul className='absolute left-1/2 -translate-x-1/2 flex gap-10'>
                        <Link to="/">Home</Link>
                        <Link to="/resturant">Resturant</Link>
                        <Link to="/cart">Cart</Link>
                    </ul>
                    <div className='ml-auto flex items-center gap-10'>
                        <input type="text" placeholder='Search' className=' border border-[#FF7F00] rounded-full px-5 py-1 w-30 shadow-gray-950' />
                        <button> Login</button>
                        <button> Cart </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar