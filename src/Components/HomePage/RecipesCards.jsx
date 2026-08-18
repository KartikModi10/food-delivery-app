import React, { useContext } from 'react'
import { FaStar, FaClock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';



const RecipesCards = ({ id, image, name, cuisine, rating, prepTimeMin, caloriesPerServing }) => {

    const navigate = useNavigate();

    const productObject ={
        id: id,
        image: image,
        name: name,
        cuisine: cuisine,
        caloriesPerServing: caloriesPerServing,
        quantity: 1
    }

    const { cartItem, setCartItem } = useContext(CartContext)

    const addToCart = () => {
        const compareExistProduct = cartItem.find((item) => { return item.id === id })
        if (compareExistProduct) {
            const updatedCart = cartItem.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
            setCartItem(updatedCart)
        } else { setCartItem([...cartItem, { ...productObject, quantity: 1 }]); }
        navigate("/cart")
    }

    return (
        <div className='w-[24%] shadow-[0_0_7px_#8080806e] rounded-2xl overflow-hidden '>
            <img onClick={() => {
                navigate(`/restaurant/${id}`);
            }} className='loading="lazy" w-full h-52 object-cover rounded-t-2xl hover:scale-105 overflow-hidden transition-all duration-300 cursor-pointer' src={image} alt="" />
            <div className='px-5 py-4 flex flex-col gap-3'>
                <h3 onClick={() => {
                    navigate(`/restaurant/${id}`);
                }} className='text-l font-medium hover:cursor-pointer'>{name}</h3>
                <div className='flex justify-between'>
                    <p className='text-mist-600'>{cuisine}</p>
                    <p className='font-medium mr-3 '> Rs. {caloriesPerServing}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='flex items-center gap-1'> <FaStar /> {rating}</p>
                    <p className='flex items-center gap-1'><FaClock />{prepTimeMin} mins</p>
                    <button className='bg-black rounded-3xl px-3 py-2 text-white text-xs font-bold hover:cursor-pointer active:scale-95 transition-transform duration-100' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}

export default RecipesCards