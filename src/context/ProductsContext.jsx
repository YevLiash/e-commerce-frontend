import {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const ProductsContext = createContext()

function ProductsProvider({children}) {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const fetchingProducts = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products')
        setProducts(res.data.products)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchingProducts()
  }, [])

  return <ProductsContext.Provider
    value={{
      products,
      setProducts,
      isLoading,
      error,
      filteredProducts,
      setFilteredProducts
    }}
  >{children}
  </ProductsContext.Provider>
}

export default ProductsProvider