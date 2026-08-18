import Home from './Components/HomePage/Home'
import ResturantPage from './Components/ResturantPage/ResturantPage'
import About from './Components/About/About'
import Cart from './Components/CartPage/Cart'
import { Routes, Route } from 'react-router-dom'
import ResturantCollection from './Components/ResturantPage/ResturantCollection'

const App = () => {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<ResturantPage />} />
        <Route path="/resturant" element={<ResturantCollection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App