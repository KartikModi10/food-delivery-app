import React, { useState } from 'react'
import Navbar from '../HomePage/Navbar'
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { MdDelete } from "react-icons/md";




const Cart = () => {

  // Cart Quantity functionality
  function increase(increaseId) {
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
  // Cart Quantity Decrease functionality
  function decrease(decreaseId) {
    const compareDecId = cartItem.map((item) => {
      if (decreaseId.id === item.id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })

    setCartItem(compareDecId);
  }
  // Cart Product Delete Functionality
  function remove(removeItem) {
    const removeProduct = cartItem.filter((item) => {
      if (removeItem.id !== item.id) {
        return true
      } else {
        return false
      }
    })

    setCartItem(removeProduct);
  }

  const { cartItem, setCartItem } = useContext(CartContext);

  const Subtotal = cartItem.reduce((total, item)=>{
    return total + item.caloriesPerServing * item.quantity
  },0)

  const shipping = 50;
  const discount = Subtotal * 10/100;
  const totalAmount = Subtotal + shipping - discount


  return (
    <div>
      <Navbar />
      <hr className='mt-3' />
      <div className='w-[90%] m-auto mb-8'>
        <h1 className='text-4xl mt-2 '>Your Cart</h1>
        {cartItem.length > 0 ? (
          <div className='flex mainContainerrr gap-6'>
            <div className='border p-2 w-[60%] mt-5 shadow-[0_0_6px_grey] rounded-2xl cartItemContainerr'>
              {cartItem.length > 0 && (
                <div className=''>
                  {
                    cartItem.map((item) => {
                      return (
                        <div key={item.id} className='flex justify-between px-3 items-center'>
                          <div className='flex items-center gap-2 my-3'>
                            <div><img className='w-20 rounded-2xl' src={item.image} alt={item.name} /></div>
                            <div>
                              <h3>{item.name}</h3>
                              <p className='text-xs text-gray-900 font-medium'> Rs.{item.caloriesPerServing * item.quantity}</p>
                              <p className='text-xs text-gray-600'>{item.cuisine}</p>
                            </div>
                          </div>
                          <div className='containerrr flex flex-col items-end gap-6'>
                            <div className='flex justify-between pr-2 hover:cursor-pointer' onClick={() => remove(item)}> <MdDelete /></div>
                            <div className='flex bg-amber-500 w-20 px-3 py-1 items-center rounded-2xl justify-between'>
                              <button className='hover:cursor-pointer' onClick={() => decrease(item)}>-</button>
                              <p>{item.quantity}</p>
                              <button className='hover:cursor-pointer' onClick={() => increase(item)}>+</button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              )
              }</div>
            <div className='border p-2 w-[40%] mt-5 shadow-[0_0_6px_grey] rounded-2xl orderSummaryContainerr '>
              <h2 className='font-medium text-2xl'>Order Summary</h2>
              <div className='flex justify-between px-2 mt-2'>
                <p>Subtotal</p>
                <p>{Subtotal}</p>
              </div>

              <div className='flex justify-between px-2 mt-2'>
                <p>Shipping Price</p>
                <p>+{shipping}</p>
              </div>

              <div className='flex justify-between px-2 mt-2'>
                <p>Discount</p>
                <p>-{discount}</p>
              </div>
              <hr className='mt-6' />
              <div className='flex justify-between px-2 mt-2'>
                <p className='font-medium'>Total</p>
                <p className='font-medium'>{totalAmount}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className='mt-5 text-gray-600'>Your cart is empty.</p>
        )}
      </div>
    </div>
  )
}

export default Cart
