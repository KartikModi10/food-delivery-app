import React, { useEffect, useState } from 'react'
import RecipesCards from './RecipesCards'

const PopularResturant = () => {
    const [recipe, setRecipe] = useState([]);

    const getRecipes = async () => {
        const responseData = await fetch("https://dummyjson.com/recipes?limit=8");
        const data = await responseData.json();

        setRecipe(data.recipes)
    }

    useEffect(() => {
        getRecipes();
    }, [])

    
    return (
        <div className='w-[90%] m-auto pt-3'>
            <h1 className='PopularResturantContent text-3xl font-semibold'>Popular resturants near you</h1>
            <p className='PopularResturantContent text-s font-light'>Top-rated kitchens loved by your neighbourhood</p>
            <div className='flex flex-wrap gap-2 mt-5'>
                {recipe.map((recipeItems) => {
                    return (
                        <RecipesCards
                            key={recipeItems.id}
                            id={recipeItems.id}
                            image={recipeItems.image}
                            name={recipeItems.name}
                            rating={recipeItems.rating}
                            cuisine={recipeItems.cuisine}
                            prepTimeMin={recipeItems.prepTimeMinutes}
                            caloriesPerServing={recipeItems.caloriesPerServing}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PopularResturant