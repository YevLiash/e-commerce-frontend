import {useContext} from "react"
import {CartContext} from "../Context/CartContext.jsx"

function useCart() {
	return (
		useContext(CartContext)
	)
}

export default useCart