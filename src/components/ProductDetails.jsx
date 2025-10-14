import {useParams} from 'react-router-dom'
import useCart from '../hooks/useCart.jsx'
import Rating from './Rating.jsx'
import useProducts from '../hooks/useProducts.jsx'

function ProductDetails() {
  const {id} = useParams()
  const {addProduct} = useCart()
  const {products, error, isLoading} = useProducts()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p className="text-red-500">{error}</p>

  const product = products.find(p => p.id === Number(id) || p.id === id)
  if (!product) return <p>Product not found</p>

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-10 mx-auto w-full px-5 mt-4 lg:max-w-[850px]">

      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="rounded-2xl w-full border-gray-300 shadow-lg max-w-[200px] sm:max-w-[250px]  object-cover"
        />
      </div>

      <div className="flex flex-col justify-between w-full sm:w-2/3">
        <div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-500 mb-2">{product.brand}</p>
            <div className="flex  justify-between items-center mb-2 gap-2">
              <p className="text-xl font-bold">{product.price} $</p>
              <Rating value={product.rating} />
            </div>
            <p className="text-gray-700 mb-2 leading-relaxed">{product.description}</p>
            <p className="text-sm text-gray-500 mb-2">Avialable: {product.stock}</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <button
              onClick={() => addProduct(product)}
              className="border bg-gray-900 text-white rounded-md px-4 py-1 cursor-pointer hover:bg-gray-600 transition"
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold">Product Reviews</h2>
          <ul className="flex flex-col gap-3 mt-2">
            {product.reviews.map(review => {
                const dateString = '2025-04-30T09:41:02.053Z'
                const date = new Date(review.date)

                const day = date.getDate()
                const month = date.getMonth() + 1
                const year = date.getFullYear()
                const reformatDate = `${day}.${month}.${year}`

                return (<li
                  key={review.id}
                  className="rounded-2xl p-2 w-full border-gray-300 shadow-lg"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p>{review.reviewerName}</p>
                    <Rating value={review.rating} />
                  </div>
                  <p>{review.comment}</p>
                  <p className="text-sm text-gray-500">{reformatDate}</p>
                </li>)
              }
            )}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails
