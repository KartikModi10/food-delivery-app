import React from 'react'
import { FaStar, FaClock  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const RecipesCards = ({ id,image, name, cuisine, rating, prepTimeMin }) => {

    const navigate = useNavigate();
    
    return (
        <div onClick={()=>{
            navigate(`/restaurant/${id}`);
        }} className='w-[24%] shadow-[0_0_7px_#8080806e] rounded-2xl overflow-hidden '>
            <img className='w-full h-52 object-cover rounded-t-2xl hover:scale-105 overflow-hidden transition-all duration-300 cursor-pointer' src={image} alt="" />
            <div className='px-5 py-4'>
                <h3 className='text-l font-medium'>{name}</h3>
                <p className='text-mist-600'>{cuisine}</p>
                <div className='flex justify-between'>
                    <p className='flex items-center gap-1'> <FaStar /> {rating}</p>
                    <p className='flex items-center gap-1'><FaClock/>{prepTimeMin} mins</p>
                    <button className='bg-black rounded-3xl px-3 py-2 text-white text-xs font-bold'>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}

export default RecipesCards