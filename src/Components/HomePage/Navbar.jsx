import React from 'react'
import logo from '../../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom'
import Search from '../NavbarParts/Search'

const Navbar = () => {
    return (
        <>
            <div className=' h-18'>
                <div className='relative flex items-center w-[90%] mx-auto h-full'>
                    <div >
                        <NavLink to="/"><img src={logo} alt="" className='w-20' /></NavLink>
                    </div>
                    <ul className='absolute left-1/2 -translate-x-1/2 flex gap-10'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/resturant">Resturant</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        {/* <NavLink to="/cart">Cart</NavLink> */}
                    </ul>
                    <div className='ml-auto flex items-center gap-10'>
                        <Search/>
                        
                        <button> Login</button>
                        <NavLink to="/cart">Cart</NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar