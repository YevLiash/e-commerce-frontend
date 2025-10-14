import {useNavigate} from "react-router-dom"
import {IoCartOutline} from "react-icons/io5"

function EmptyCart() {
	const navigate = useNavigate()
	return (
		<div
			className="flex flex-col items-center justify-center py-20 text-center"
		>
			<IoCartOutline className="text-6xl  mb-4" />
			<h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
			<p className="text-gray-700 mb-6">Add some products to start shopping</p>
			<button
				onClick={() => navigate("/products")}
				className="mx-auto border bg-gray-50 rounded-md gray-700 px-4 py-1 mt-auto hover:bg-gray-900 hover:text-gray-50 transition"
			>
				Go Shopping
			</button>
		</div>
	)
}

export default EmptyCart