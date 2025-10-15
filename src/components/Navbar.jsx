import {NavLink, useNavigate} from 'react-router-dom'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {IoCartOutline} from 'react-icons/io5'
import {FaBars, FaRegUser} from 'react-icons/fa'
import {useState} from 'react'
import useCart from '../hooks/useCart.jsx'

function Navbar() {
  const navigate = useNavigate()
  const {cart, totalProductQuantity} = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass = ({isActive}) =>
    `inline-block transition-transform duration-200 ${
      isActive ? 'underline underline-offset-4' : 'hover:scale-105'}`

  return (
    <div className="max-w-[1240px] px-3 py-1.5 mx-auto flex justify-between items-center relative text-sm md:text-base">
      <div
        className="flex items-center gap-2 md:gap-2.5 cursor-pointer"
        onClick={() => navigate('/')}
      >
        <HiOutlineShoppingBag className="text-4xl md:text-5xl" />
        <p className="font-semibold text-2xl md:text-3xl">SHOPPER</p>
      </div>

      <ul className="hidden md:flex gap-4 md:gap-5 absolute left-1/2 transform -translate-x-1/2">
        <li><NavLink
          to="/"
          className={navLinkClass}
        >Home</NavLink></li>
        <li><NavLink
          to="/about"
          className={navLinkClass}
        >About</NavLink></li>
        <li><NavLink
          to="/products"
          className={navLinkClass}
        >Products</NavLink></li>
        <li><NavLink
          to="/contacts"
          className={navLinkClass}
        >Contact</NavLink></li>
      </ul>

      <div className="flex items-center gap-3 md:gap-5">
        <div className="relative">
          <NavLink to="/cart">
            <IoCartOutline
              className="text-3xl md:text-4xl p-1 cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          </NavLink>

          {cart.length > 0 && (
            <p className="absolute right-[-8px] top-[-6px] text-xs md:text-sm rounded-full px-1.5 bg-gray-800 text-white">
              {totalProductQuantity}
            </p>
          )}
        </div>
        <NavLink to="#">
          <FaRegUser className="text-2xl md:text-3xl p-1 cursor-pointer transition-transform duration-200 hover:scale-105" />
        </NavLink>
        <FaBars
          onClick={() => setIsOpen(prev => !prev)}
          className="text-2xl md:hidden cursor-pointer p-1  rounded transition-transform duration-200 hover:scale-105"
        />
      </div>

      {isOpen && (
        <div className="absolute top-[105%] right-0 bg-white border border-gray-300 rounded shadow-md flex flex-col py-2 px-3 md:hidden">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="py-1 px-2 hover:bg-gray-200 rounded"
          >Home</NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="py-1 px-2 hover:bg-gray-200 rounded"
          >About</NavLink>
          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className="py-1 px-2 hover:bg-gray-200 rounded"
          >Products</NavLink>
          <NavLink
            to="/contacts"
            onClick={() => setIsOpen(false)}
            className="py-1 px-2 hover:bg-gray-200 rounded"
          >Contact</NavLink>
        </div>
      )}
    </div>
  )
}

export default Navbar
