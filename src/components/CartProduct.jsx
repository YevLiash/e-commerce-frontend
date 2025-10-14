import {CiSquareMinus, CiSquarePlus, CiTrash} from 'react-icons/ci'
import useCart from '../hooks/useCart.jsx'
import {useEffect, useState} from 'react'

function CartProduct({product}) {
  const {deleteProduct, updateQuantity} = useCart()
  const [quantity, setQuantity] = useState(product.quantity)

  useEffect(() => {
    updateQuantity(product.id, quantity)
  }, [quantity])

  function plusQuantity() {
    if (quantity < product.stock) setQuantity(q => q + 1)
  }

  function minusQuantity() {
    if (quantity > 1) setQuantity(q => q - 1)
  }

  return (
    <li
      className="
        flex flex-col sm:grid sm:grid-cols-[1fr_2fr] md:grid-cols-[2fr_3fr]
        gap-4 sm:gap-6 border border-gray-300 p-4 rounded-2xl shadow-sm
        w-full max-w-[800px] mx-auto
        sm:items-center
      "
    >
      <div className="flex   items-center sm:items-start gap-4 text-center sm:text-left">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-28 w-28 object-cover rounded-xl "
        />
        <div className="flex flex-col items-start gap-1">
          <p className="font-semibold text-base sm:text-lg">{product.title}</p>
          <p className="text-gray-500 text-sm sm:text-base">{product.category}</p>
        </div>
      </div>

      <div className="flex justify-around  items-center gap4 sm:gap-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <button onClick={minusQuantity}>
            <CiSquareMinus className="text-3xl sm:text-4xl hover:text-gray-700 transition" />
          </button>
          <input
            type="number"
            min="1"
            max={product.stock}
            value={quantity}
            readOnly
            className="border w-12 sm:w-14 text-center rounded-md text-sm sm:text-base"
          />
          <button onClick={plusQuantity}>
            <CiSquarePlus className="text-3xl sm:text-4xl hover:text-gray-700 transition" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-1   items-center justify-center sm:justify-start  sm:gap-2">
          <p className="text-gray-700 text-sm sm:text-base">
            {product.price} $ x {quantity}
          </p>
          <p className="font-bold text-base sm:text-lg">
            {(product.price * quantity).toFixed(2)} $
          </p>
        </div>

        <div className="flex justify-center sm:justify-end">
          <CiTrash
            className="text-2xl sm:text-3xl text-gray-600 hover:text-red-500 cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => deleteProduct(product.id)}
          />
        </div>
      </div>
    </li>
  )
}

export default CartProduct
