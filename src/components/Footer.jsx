import {FaFacebookF, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="w-full px-5 py-1 md:py-2 mt-5  bg-gray-100  border-t">
      <div
        className="max-w-[1240px] mx-auto flex flex-col gap-1  items-center md:flex-row md:justify-between "
      >
        <div className="flex items-center gap-5 md:gap-10">
          <h2 className="text-2xl font-bold text-gray-700">
            SHOPPER
          </h2>
          <ul className="flex gap-5 text-2xl text-gray-700">
            <li className="hover:scale-110 transition-transform duration-300">
              <a
                href="#"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="hover:scale-110 transition-transform duration-300">
              <a
                href="#"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="hover:scale-110 transition-transform duration-300">
              <a
                href="#"
                target="_blank"
              >
                <FaTwitter />
              </a>
            </li>

            <li className="hover:scale-110 transition-transform duration-300">
              <a
                href="#"
                target="_blank"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} SHOPPER. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
