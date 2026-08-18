import React from 'react'
import Navbar from '../HomePage/Navbar'
import PopularResturant from '../HomePage/PopularResturant'
import TrendingDishes from '../HomePage/TrendingDishes'

const ResturantCollection = () => {
    return (
        <>
            <div className='resturantCategory mb-6'>
                <Navbar />
                <hr className='mt-3' />
                <div><h1 className='text-3xl font-medium w-[90%] m-auto pt-4'>Collection Page</h1></div>
                <PopularResturant />
                <TrendingDishes />
            </div>
        </>
    )
}

export default ResturantCollection