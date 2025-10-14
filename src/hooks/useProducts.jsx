import {useContext} from 'react'
import {ProductsContext} from '../context/ProductsContext.jsx'

function UseProducts(props) {
  return (
    useContext(ProductsContext)
  )
}

export default UseProducts