import React from 'react'
import pizza from '../assets/pizza.jpg'

const Categories = () => {
    return (
        <div className='bg-[#FFF5ED]'>
            <hr />
            <div className='w-[90%] m-auto pt-3'>
                <h1 className='text-3xl font-semibold'>What are you craving?</h1>
                <p className='text-s font-light'>Browse by category</p>
                <div className='cards shadow-[0_0_7px_#8080806e] mt-2'>
                    <img className='w-20 rounded-full' src={pizza} alt="" />
                    <h3>Pizza</h3>
                    <p>Places</p>
                </div>
            </div>
        </div>
    )
}

export default Categories