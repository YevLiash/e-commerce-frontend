import Product from './Product.jsx'
import Loader from './Loader.jsx'
import ErrorMessage from './ErrorMessage'

function ProductsList({products, isLoading, error}) {

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <ul className="flex justify-center flex-wrap gap-8">{!isLoading &&
        !error &&
        products.map(product => <Product
          key={product.id}
          product={product}
        />)}</ul>
    </>
  )
}

export default ProductsList