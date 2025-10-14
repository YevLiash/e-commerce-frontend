import {useEffect, useState} from 'react'
import {PiCaretDownThin, PiCaretUpThin} from 'react-icons/pi'

function Filter({products, setFilteredProducts}) {
  const [selectedCategory, setSelectedCategory] = useState('all products')
  const [searchInput, setSearchInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const categories = ['all products', ...new Set(products.map(i => i.category))]

  useEffect(() => {
    let filteredProducts = products.filter(p => {
      const categoryMatch = selectedCategory === 'all products'
        ? true
        : p.category.trim().toLocaleLowerCase() === selectedCategory.trim().toLocaleLowerCase()
      const searchMatch = p.title.trim().toLocaleLowerCase().includes(searchInput.trim().toLocaleLowerCase())

      return categoryMatch && searchMatch
    })

    setFilteredProducts(filteredProducts)

  }, [selectedCategory, products, searchInput])
  return (
    <div
      onClick={() => setIsOpen(prev => !prev)}
      className="flex flex-col justify-center items-center sm:flex-row gap-4 mx-auto mb-6"
    >
      <div
        className="relative border border-gray-900 rounded-xl w-[150px] h-[35px] px-3 py-1 flex justify-between items-center bg-white cursor-pointer"
      >
        <span className="capitalize">{selectedCategory}</span>
        {isOpen ? (
          <PiCaretUpThin
            onClick={() => setIsOpen(prev => !prev)}
            className="text-xl"
          />
        ) : (
          <PiCaretDownThin
            onClick={() => setIsOpen(prev => !prev)}
            className="text-xl"
          />
        )}

        {isOpen && (
          <ul
            className="absolute left-0 top-full mt-1 pt-1 border z-30 bg-white rounded-xl shadow-md w-full"
          >
            {categories.map(i => (
              <li
                key={i}
                className="mb-1"
              >
                <button
                  type="button"
                  value={i}
                  onClick={e => {
                    e.stopPropagation()
                    setSelectedCategory(e.target.value)
                    setIsOpen(false)
                  }}
                  className="capitalize w-full text-left px-3 py-2 hover:bg-gray-200 rounded-lg"
                >
                  {i}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <input
        className="border border-gray-900 rounded-xl h-[35px] mx-auto  px-3 py-1 min-w-[288px] sm:min-w-[350px] "
        type="text"
        placeholder="Search for products..."
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
    </div>
  )
}

export default Filter