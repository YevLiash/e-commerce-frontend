import {FaRegStar, FaStar, FaStarHalfAlt} from 'react-icons/fa'

function Rating({value}) {
  const ratingValue = [1, 2, 3, 4, 5]

  return (
    <div className="flex items-center">
      {ratingValue.map((star) => {
        if (value >= star) {
          return <FaStar
            key={star}
            className="text-yellow-500"
          />
        } else if (value >= star - 0.5) {
          return <FaStarHalfAlt
            key={star}
            className="text-yellow-500"
          />
        } else {
          return <FaRegStar
            key={star}
            className="text-yellow-400"
          />
        }
      })}
      <span
        className="ml-2 text-gray-700 text-sm"
      >{Number(value).toFixed(1)}</span>
    </div>
  )
}

export default Rating
