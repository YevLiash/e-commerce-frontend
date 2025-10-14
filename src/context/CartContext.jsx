import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext()

function CartProvider({children}) {
  const [cart, setCart] = useState(() => {
    const savedProducts = localStorage.getItem('cart')
    return savedProducts ? JSON.parse(savedProducts) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addProduct(item, quantity = 1) {
    setCart(prevCart => {
        const existProduct = prevCart.find(i => i.id === item.id)
        if (existProduct) {
          return prevCart.map(itm => itm.id === item.id ? {
            ...itm,
            quantity: itm.quantity + 1
          } : itm)
        } else {
          return [...prevCart, {...item, quantity}]
        }
      }
    )
  }

  function deleteProduct(id) {
    setCart(prevCart => prevCart.filter(product => product.id !== id))
  }

  function updateQuantity(id, newQuantity) {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        return {...item, quantity: newQuantity}
      }
      return item
    }))
  }

  function clearCart() {
    setCart([])
  }

  const totalProductQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

  return <CartContext.Provider
    value={{
      cart,
      addProduct,
      deleteProduct,
      clearCart,
      updateQuantity,
      totalProductQuantity
    }}
  >{children}
  </CartContext.Provider>
}

export default CartProvider