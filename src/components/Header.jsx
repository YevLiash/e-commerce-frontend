import Navbar from './Navbar.jsx'
import DiscountTop from './DiscountTop.jsx'

function Header() {

  return (
    <header className=" bg-gray-100 md:mb-2 border-b">
      <DiscountTop />
      <Navbar />
    </header>
  )
}

export default Header