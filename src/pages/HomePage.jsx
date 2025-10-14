import {useNavigate} from 'react-router-dom'
import useProducts from '../hooks/useProducts.jsx'
import Rating from '../components/Rating.jsx'
import Loader from '../components/Loader.jsx'

function HomePage() {
  const {products, error, isLoading} = useProducts()
  const navigate = useNavigate()

  const randomProducts = products
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  return (
    <div className="max-w-[1240px] px-3 py-3 sm:px-5 sm:py-6 mx-auto text-gray-900 flex flex-col items-center gap-1 sm:gap-3 lg:gap-8 ">
      <div className="text-center mb-2 xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2 ">
        <h1 className="text-2xl font-bold mb-2   sm:text-3xl md:text-4xl l:mb-2">Welcome to Our Store!</h1>
        <p className="text-gray-700  text-m   md:text-l">
          Discover a selection of high-quality products carefully chosen for you.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-6 w-full">
        {isLoading && <Loader />}
        {error && <p className="text-red-500">{error}</p>}

        {!isLoading && !error && (
          <ul
            className="
              grid gap-6
              xl:grid-cols-4
              lg:grid-cols-4
              md:grid-cols-2
              sm:grid-cols-2
              justify-items-center
              mb-5
              sm:mb-2
            "
          >
            {randomProducts.map((product) => (
              <li
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="
                  cursor-pointer flex flex-col justify-between
                  border border-gray-300 rounded-2xl shadow-md
                  p-4 w-60 h-65 hover:shadow-lg transition
                  lg:w-56
                  md:w-64
                  sm:w-full sm:h-auto
                "
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-32 w-full object-contain mb-3"
                />
                <h2 className="font-bold text-base sm:text-md ">
                  {product.title}
                </h2>
                <div
                  className="
                    flex justify-between items-center mb-2
                     md:items-start md:gap-1
                  "
                >
                  <p className="text-base  sm:text-lg">{product.price} $</p>
                  <Rating value={product.rating} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={() => navigate('/products')}
        className="px-6 py-2 bg-gray-900 text-white rounded-lg cursor-pointer hover:bg-gray-700 transition text-lg sm:text-base"
      >
        Want more?
      </button>
    </div>
  )
}

export default HomePage
