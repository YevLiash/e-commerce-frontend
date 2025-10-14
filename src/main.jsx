import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import {BrowserRouter} from "react-router-dom"
import CartProvider from "./Context/CartContext.jsx"
import ProductsProvider from "./Context/ProductsContext.jsx"

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ProductsProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</ProductsProvider>
	</BrowserRouter>
)
