import {useContext} from 'react'
import {CartContext} from '../context/CartContext.jsx'

function useCart() {
  return (
    useContext(CartContext)
  )
}

export default useCart