import React from 'react'
import Navbar from './Navbar'
import Herobanner from './Herobanner'
import Categories from '../HomePage/Categories'
import PopularResturant from './PopularResturant'
import Footer from './Footer'
import TrendingDishes from './TrendingDishes'

const Home = () => {
  return (
    <div >
      <Navbar />
      <Herobanner />
      <Categories/>
      <PopularResturant />
      <TrendingDishes/>
      <Footer />
    </div>
  )
}

export default Home