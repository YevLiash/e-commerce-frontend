import {useState} from 'react'
import {LuMailCheck} from 'react-icons/lu'

function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSent, setIsSent] = useState(false)

  function handleSubmit(e) {
    const messageData = {name, email, message}
    e.preventDefault()

    setName('')
    setEmail('')
    setMessage('')

    setIsSent(true)
    setTimeout(() => setIsSent(false), 3000)
  }

  return (
    <div className="max-w-[1240px] px-3 py-3 sm:px-5 sm:py-6 mx-auto text-gray-900 flex flex-col items-center gap-1 sm:gap-3 lg:gap-8 ">
      <div className="text-center mb-4">
        <h1 className=" text-2xl  md:text-3xl  font-bold mb-2">Contact Us</h1>
        <p className="text-gray-700 text-base ">
          Questions about our products, orders, or returns? Fill out the form below and our team will respond promptly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[300px] sm:w-[400px] mx-auto flex flex-col justify-center gap-1"
      >
        <label htmlFor="name"></label>
        <input
          type="text"
          required
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
          className="border rounded-md border-gray-900 py-2 px-4 mb-4 w-full"
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          required
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border rounded-md border-gray-900 py-2 px-4 mb-4 w-full"
        />
        <label htmlFor="message"></label>
        <textarea
          required
          name="message"
          placeholder="Your message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="border rounded-md border-gray-900 py-2 px-4 mb-4 w-full h-[120px]"
        />
        <button
          type="submit"
          className="mx-auto border bg-gray-900 text-white rounded-md px-6 py-1 md:py-2 md:px-8 mt-auto cursor-pointer hover:bg-gray-600 transition"
        >Send
        </button>
      </form>
      {isSent && (
        <div className="flex gap-2 items-center mt-2 mx-auto   text-gray-900 px-4 py-2 rounded-lg shadow-lg transition-all duration-500 z-50">
          <LuMailCheck /> Your message has been sent!
        </div>
      )}
    </div>
  )
}

export default ContactPage
