import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ContactsPage from "./pages/ContactsPage.jsx"
import ProductsPage from "./pages/ProductsPage.jsx"
import CartPage from "./pages/CartPage.jsx"
import Layout from "./layout/Layout.jsx"
import ProductsDetailsPage from "./pages/ProductsDetailsPage.jsx"

function App() {

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="contacts" element={<ContactsPage />} />
				<Route path="products" element={<ProductsPage />} />
				<Route path="cart" element={<CartPage />} />
				<Route path="product/:id" element={<ProductsDetailsPage />} />
			</Route>
		</Routes>
	)
}

export default App
