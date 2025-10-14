import React from 'react'
import {useNavigate} from 'react-router-dom'

function AboutPage() {
  const navigate = useNavigate()
  return (
    <div className="max-w-[1240px] px-3 py-3 sm:px-5 sm:py-6 mx-auto text-gray-900 flex flex-col items-center gap-1 sm:gap-3 lg:gap-8 ">
      <div className="text-center ">
        <h1 className="text-4xl font-bold mb-4">About Our Store</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Our store was founded in 2022 with the goal of making stylish and high-quality clothing accessible to everyone. We believe that fashion is a way to express yourself and highlight your individuality.
        </p>
      </div>

      <div className="text-center">
        <h2 className=" text-xl md:text-2xl  font-semibold mb-2 md:mb-3">Why Choose Us</h2>
        <ul className="space-y-1 md:space-y-3 text-gray-700 text:base md:text-lg max-w-xl mx-auto">
          <li>⭐ 100% original products with quality guarantee</li>
          <li>🚚 Fast and reliable delivery across Europe</li>
          <li>💳 Safe and convenient payment methods</li>
          <li>💬 24/7 customer support</li>
          <li>🎁 Regular discounts, deals, and bonus programs</li>
        </ul>
      </div>

      <div className="text-center">
        <h2 className=" text-xl md:text-2xl  font-semibold mb-2 md:mb-3">Shipping & Returns</h2>
        <p className="text-gray-700 text:base md:text-lg mb-4 max-w-3xl mx-auto">
          We deliver throughout Europe with reliable shipping partners. Delivery usually takes between <span
          className="font-semibold"
        >2–5 business days</span>, depending on your location. You can always track your order status in your personal account.
        </p>

        <p className="text-gray-700 text:base md:text-lg max-w-3xl mx-auto">
          If a product doesn’t meet your expectations or arrives damaged, you can return it within <span
          className="font-semibold"
        >14 days</span> of receiving it. We guarantee fair return conditions and quick issue resolution.
        </p>
      </div>

      <div className="text-center">
        <h2 className=" text-xl md:text-2xl  font-semibold mb-2 md:mb-3">Contact Us</h2>
        <p className="text-gray-700 text:base md:text-lg mb-6 max-w-3xl mx-auto">
          If you have any questions or need assistance, you can use our contact form to reach us quickly and easily.
        </p>
        <button
          onClick={() => navigate('/contacts')}
          className="px-4 py-2  md:px-6 md:py-3 mb-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition duration-300"
        >
          Go to Contact Form
        </button>
      </div>

      <div className="text-center">
        <p className="text-xl font-semibold text-gray-700 max-w-3xl mx-auto">
          Join us and discover a world of stylish, high-quality, and comfortable clothing!
        </p>
      </div>
    </div>
  )
}

export default AboutPage
