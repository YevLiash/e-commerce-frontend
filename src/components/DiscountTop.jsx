import {useState} from 'react'

function DiscountTop() {
  const [hidden, setHidden] = useState(false)

  return (
    <div
      className={`
        relative
        w-full
        bg-gray-900 
        text-[#f3f2f2] 
        text-center 
        font-light 
        transition-all 
        duration-1000 
        ease-in 
        overflow-hidden
        ${hidden ? 'opacity-0 max-h-0' : 'opacity-100 max-h-20'}
      `}
    >
      <div className="max-w-[1240px] px-5 py-2 mx-auto flex items-center justify-center relative sm:py-1">
        <p className="mr-7 text-sm m:text-lg sm:text-base">
          Sign up and get 20% off to your first order.
          <a
            href="#"
            className="underline ml-2"
          >Sign Up Now</a>
        </p>
        <button
          className="text-[#f3f2f2] cursor-pointer text-lg sm:text-base absolute right-5 top-1 sm:top-0"
          onClick={() => setHidden(true)}
        >
          x
        </button>
      </div>
    </div>
  )
}

export default DiscountTop
