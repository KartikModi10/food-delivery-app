import React, { useEffect, useState } from 'react'
import TrendingCards from './TrendingCards'

const TrendingDishes = () => {

    const [recipe, setRecipes] = useState([])
    const recipes = async () => {
        const getRecipe = await fetch("https://dummyjson.com/recipes?limit=4&skip=8")
        const datas = await getRecipe.json();

        setRecipes(datas.recipes);
    }

    console.log(recipe)
    useEffect(() => {
        recipes();
    }, [])
    return (
        <div className='mt-5'>
            <hr />
            <div className='w-[90%] m-auto pt-3'>
                <h1 className='text-3xl font-semibold'>Trending dishes this week</h1>
                <p className='text-s font-light'>Most ordered plates right now</p>
                <div className='flex flex-wrap gap-2 mt-5'>
                    {
                        recipe.map((recipeItems) => {
                            return (
                                <TrendingCards
                                    key={recipeItems.id}
                                    image={recipeItems.image}
                                    name={recipeItems.name}
                                    rating={recipeItems.rating}
                                    cuisine={recipeItems.cuisine}
                                    prepTimeMin={recipeItems.prepTimeMinutes}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default TrendingDishes