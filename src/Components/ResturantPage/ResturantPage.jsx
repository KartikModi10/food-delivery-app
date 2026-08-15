import React, { useEffect, useState } from 'react'
import Navbar from '../HomePage/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from '../../Context/CartContext';

const ResturantPage = () => {
  const { id } = useParams();

  const [cardDetail, setCardDetail] = useState({})
  const [num, setNum] = useState(1)

  const ProductDetail = async () => {
    const wholeData = await fetch(`https://dummyjson.com/recipes/${id}`)
    const data = await wholeData.json();
    setCardDetail(data)
  }
  const decreaseBtn = () => {
    if (num > 1) {
      setNum(num - 1)
    }
  }
  const increaseBtn = () => {
    setNum(num + 1)
  }

  useEffect(() => {
    ProductDetail()
  }, [])

  const navigate = useNavigate();

  const { cartItem, setCartItem } = useContext(CartContext)
  const addToCart = () => {
    const existProduct = cartItem.find((item)=>{ return item.id === cardDetail.id})
    if (existProduct){
      const updatedCart = cartItem.map((item)=>{
        if(item.id === cardDetail.id){
          return{
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      });
      setCartItem(updatedCart);
    }else {setCartItem([...cartItem, {...cardDetail, quantity: 1}]);}
    navigate("/cart")
  };

  return (
    <div>
      <Navbar />
      <div className="w-[90%] mx-auto py-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left Side */}
          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
            <img
              src={cardDetail?.image}
              alt={cardDetail?.name}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Right Side */}
          <div>

            <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
              {cardDetail?.cuisine}
            </span>

            <h1 className="text-4xl font-bold mt-4">
              {cardDetail?.name}
            </h1>

            <div className="flex items-center gap-4 mt-5">

              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                ⭐ {cardDetail?.rating}
              </div>

              <div className="text-gray-600">
                ⏱ {cardDetail?.prepTimeMinutes} mins
              </div>

              <div className="text-gray-600">
                🍽 {cardDetail?.servings} Servings
              </div>

            </div>

            <h2 className="text-3xl font-bold text-orange-500 mt-8">
              ₹ {cardDetail?.caloriesPerServing}
            </h2>
            <div className='mt-5 border rounded-2xl px-4 w-[15%] flex justify-between items-center'>
              <button className='hover:cursor-pointer' onClick={() => {
                decreaseBtn()
              }}>-</button>
              <span>{num}</span>
              <button className='hover:cursor-pointer' onClick={() => {
                increaseBtn()
              }}>+</button>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">
                Ingredients
              </h3>

              <div className="flex flex-wrap gap-3">
                {cardDetail?.ingredients?.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">
                Instructions
              </h3>

              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                {cardDetail?.instructions?.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
            <button onClick={addToCart} className="mt-10 w-full bg-black hover:bg-orange-500 transition-all duration-300 text-white py-4 rounded-xl text-lg font-semibold">
              Add To Cart
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ResturantPage