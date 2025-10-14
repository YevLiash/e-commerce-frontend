import {useContext} from 'react'
import {ProductsContext} from '../context/ProductsContext.jsx'

function UseProducts() {
  return (
    useContext(ProductsContext)
  )
}

export default UseProducts