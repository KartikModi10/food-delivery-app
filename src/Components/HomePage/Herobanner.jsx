import React from 'react'
import herobanner from '../../assets/heroImage.jpg'
import { CiDiscount1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";


const Herobanner = () => {
    return (
        <div className='bg-[#FFF5ED] py-8'>
            <div className='flex items-center w-[90%] m-auto gap-3'>
                <div className='content w-1/2 flex flex-col gap-3 px-3'>
                    <div className='bg-white rounded-full w-70 px-8 py-2 border-1 flex items-center gap-2 text-[14px]'>
                        <CiDiscount1 />
                        <p >Flat 50% off your first 3 orders</p>
                    </div>

                    <h1 className='text-5xl font-bold'>Great food from the kitchens around you</h1>
                    <p>Over 1,200 restaurants, live order tracking and delivery in under 30 minutes. FoodFlow brings your city's best plates home.</p>
                    <div className='flex bg-white py-3 px-4 gap-1 rounded-2xl justify-between shadow-[0_0_7px_#8080806e]'>
                        <div className='flex items-center gap-2 flex-1'>
                            <CiLocationOn className="text-xl shrink-0" />
                            <input className='w-full outline-none bg-transparent' type="text" placeholder='Enter Your Delivery Location' />
                        </div>
                        <div className='flex justify-between bg-[#FE9A00] px-4 py-2 rounded-full gap-2 items-center'>
                            <button className=''>Find Food</button>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
                <div className='HeroImage w-1/2 '>
                    <img src={herobanner} alt="HeroImage" className='rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

export default Herobanner