import React, { useState } from 'react'
import Navbar from '../HomePage/Navbar'
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";



const Cart = () => {

  function increase(increaseId) {
    console.log("Your product id is: ", increaseId.id)

    const compareIncId = cartItem.map((item) => {
      if (increaseId.id === item.id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCartItem(compareIncId);
  }

  function decrease(decreaseId){

    const compareDecId = cartItem.map((item)=>{
      if(decreaseId.id === item.id ){
        return{
          ...item,
          quantity: item.quantity - 1
        }
      }
    })
    setCartItem(compareDecId);
  }

  const { cartItem, setCartItem  } = useContext(CartContext);
  return (
    <div>
      <Navbar />
      <hr className='mt-3' />
      <div className='w-[90%] m-auto'>
        <h1 className='text-4xl mt-2 '>Your Cart</h1>
        <div className='border p-2 w-[60%] mt-5 shadow-[0_0_6px_grey] rounded-2xl'>
          {
            cartItem.map((item) => {
              return (
                <div key={item.id} className='flex justify-between px-3 items-center'>
                  <div className='flex items-center gap-2 my-3'>
                    <div><img className='w-20 rounded-2xl' src={item.image} alt={item.name} /></div>
                    <div>
                      <h3>{item.name}</h3>
                      <p className='text-xs text-gray-600'> Rs.{item.caloriesPerServing}</p>
                      <p className='text-xs text-gray-600'>{item.cuisine}</p>

                    </div>
                  </div>
                  <div className='flex bg-amber-500 w-20 px-3 py-1 items-center rounded-2xl justify-between'>
                    <button className='hover:cursor-pointer' onClick={()=> decrease(item)}>-</button>
                    <p>{item.quantity}</p>
                    <button className='hover:cursor-pointer' onClick={() => increase(item)}>+</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Cart