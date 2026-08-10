import Home from './Components/HomePage/Home'
import ResturantPage from './Components/ResturantPage/ResturantPage'
import Cart from './Components/CartPage/Cart'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resturant/:id" element={<ResturantPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App