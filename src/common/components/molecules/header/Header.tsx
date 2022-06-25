import Link from 'next/link'
import { useEffect, useState } from 'react'

type Props = {}

const Header = (props: Props) => {
  const [colorChange, setColorChange] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      // 80
      setColorChange(true)
    } else {
      setColorChange(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
    return () => window.removeEventListener('scroll', changeNavbarColor)
  })

  return (
    // <header className="w-11/12 h-20 m-auto border-b border-[#718096] bg-red-200 backdrop-blur-sm bg-primary-600/30">Header</header>
    <header
      className={`w-full h-20 px-60 fixed top-0 left-0  right-0 transition-colors duration-500 
      ${colorChange ? 'bg-white text-primary-700 hidden' : ''} `}
    >
      <div className="mx-auto h-full border-b border-primary-600 flex justify-between items-center gap-2">
        <section
          className={`flex justify-center items-center gap-16  ${
            colorChange ? 'text-primary-700' : 'text-gray-100'
          }`}
        >
          <div className="" onClick={scrollToTop}>
            <Link href="/">
              <a className="text-2xl font-bold">AUTOPRO</a>
            </Link>
          </div>
          <nav className="">
            <ul className="flex gap-8">
              <li>
                <Link href="/">
                  <a
                    className={`border-b-2 font-bold  ${
                      colorChange ? 'border-primary-700' : 'border-primary-100'
                    }`}
                  >
                    Inicio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/servicios">
                  <a>Servicios</a>
                </Link>
              </li>
              <li>
                <Link href="/productos">
                  <a>Productos</a>
                </Link>
              </li>
              <li>
                <Link href="/cita">
                  <a>Reserva de cita</a>
                </Link>
              </li>
              <li>
                <Link href="/nosotros">
                  <a>Sobre nosotros</a>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <div className="flex gap-4">
          <button
            type="button"
            className={`text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-4 py-2 text-center
            ${colorChange && 'bg-primary-600'}
            `}
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            className={`text-primary-700 bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 text-center
            ${colorChange && 'bg-gray-200'}
            `}
          >
            Registrarse
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
