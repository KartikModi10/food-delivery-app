import React from 'react'
import { categories } from '../../Data/Categories'
import CategoriesCard from './CategoriesCard'
const Categories = () => {
    return (
        <div className='bg-[#FFF5ED] pb-10'>
            <hr />
            <div className='w-[90%] m-auto pt-3'>
                <h1 className='text-3xl font-semibold'>What are you craving?</h1>
                <p className='text-s font-light'>Browse by category</p>
                <div className='flex cardContainer gap-[2%] mt-2'>
                    {categories.map((item) => {
                        return (
                            <CategoriesCard
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                places={item.places}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Categories