import React from 'react'
import logo from '../../assets/logo.jpg'
const Footer = () => {
  return (
    <div className='bg-black text-white h-30 mt-4 flex items-center justify-between gap-4 w-full px-20'>
        <div><img className='w-20' src={logo} alt="" /></div>
        <ul className='flex gap-6 '>
            <li>Privacy Policy</li>
            <li>Careers</li>
            <li>About Us</li>
        </ul>
    </div>
  )
}

export default Footer