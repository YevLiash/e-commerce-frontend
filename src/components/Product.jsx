import useCart from '../hooks/useCart.jsx'
import {useNavigate} from 'react-router-dom'
import Rating from './Rating.jsx'

function Product({product}) {
  const {addProduct} = useCart()
  const navigate = useNavigate()

  return (
    <li
      onClick={() => navigate(`/product/${product.id}`)}
      className="flex flex-col max-w-72 px-4 py-4  border border-gray-300  rounded-2xl shadow-lg  "
    >
      <img
        src={product.images[0]}
        alt={product.title}
        className="mb-4 h-38 w-38 mx-auto"
      />
      <h2 className="font-bold">{product.title}</h2>
      <div className="flex justify-between items-center mb-2  ">
        <p className="text-xl">{product.price} $</p>
        <Rating value={product.rating} />
      </div>
      <p className="text-sm font-light mb-4">{product.description}</p>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          addProduct(product)
        }}
        className="mx-auto border bg-gray-900 text-white rounded-md px-4 py-1 mt-auto cursor-pointer hover:bg-gray-700 transition"
      >
        Add to cart
      </button>
    </li>
  )
}

export default Product
