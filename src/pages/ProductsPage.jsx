import React from 'react'
import ProductsList from '../components/ProductsList.jsx'
import Filter from '../components/Filter.jsx'
import useProducts from '../hooks/useProducts.jsx'

function ProductPage() {

  const {
    products,
    error,
    isLoading,
    filteredProducts,
    setFilteredProducts
  } = useProducts()

  return (
    <div className="max-w-[1240px] px-3 py-3 sm:px-5 sm:py-6 mx-auto text-gray-900 flex flex-col items-center gap-1 sm:gap-3 lg:gap-8 ">

      <Filter
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <ProductsList
        products={filteredProducts}
        isLoading={isLoading}
        error={error}
      />
    </div>
  )
}

export default ProductPage