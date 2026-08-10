import React from 'react'

const CategoriesCard = ({image, name, places}) => {
  return (   
        <div className=' cards shadow-[0_0_7px_#8080806e] mt-2 w-[15%] rounded-[7%] flex flex-col justify-center items-center py-3 transition-all duration-500 hover:bg-white hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] cursor-pointer'>
                    <img className='w-20 rounded-full' src={image} alt="" />
                    <h3>{name}</h3>
                    <p className='text-xs text-mist-600'>{places}</p>
                </div>
  )
}
export default CategoriesCard