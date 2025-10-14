import useCart from '../hooks/useCart.jsx'
import CartProduct from '../components/CartProduct.jsx'
import EmptyCart from '../components/EmptyCart.jsx'
import {IoCartOutline} from 'react-icons/io5'

function CartPage() {
  const {cart, clearCart} = useCart()

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )

  return (
    <div className="max-w-[1240px] px-3 py-3 sm:px-5 sm:py-6 mx-auto text-gray-900 flex flex-col items-center gap-1 sm:gap-3 lg:gap-8 ">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col w-full max-w-[900px] gap-6 mt-3">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <IoCartOutline
                className="text-5xl text-gray-900 transition-transform duration-300 hover:scale-110"
              />
              <h2 className="text-3xl font-bold">Your Cart</h2>
            </div>
            <button
              onClick={clearCart}
              className="text-sm text-gray-400 hover:text-red-500 hover:scale-110 transition-transform duration-300"
            >
              Clear Cart
            </button>
          </div>

          <ul className="flex flex-col gap-4 w-full">
            {cart.map((product) => (
              <CartProduct
                product={product}
                key={product.id}
              />
            ))}
          </ul>
          <div className="flex justify-center sm:justify-end items-center gap-6 mt-6">
            <p className="text-xl font-semibold">
              Total: <span className="text-2xl">{totalPrice.toFixed(2)} $</span>
            </p>
            <button
              className="cursor-pointer px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
