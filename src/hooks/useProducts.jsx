import {useContext} from "react"
import {ProductsContext} from "../Context/ProductsContext.jsx"

function UseProducts(props) {
	return (
		useContext(ProductsContext)
	)
}

export default UseProducts