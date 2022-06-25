/*
https://dev.to/dmuraco3/responsive-global-navbar-in-nextjs-with-tailwindcss-45p4
*/
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const ITEM_COMPANY = {
  id: 1,
  name: 'AUTOPRO',
  link: '/'
}

const ITEMS_NAVLINK = [
  {
    id: 1,
    name: 'Inicio',
    link: '/'
  },
  {
    id: 2,
    name: 'Servicios',
    link: '/servicios'
  },
  {
    id: 3,
    name: 'Productos',
    link: '/productos'
  },
  {
    id: 4,
    name: 'Reserva de cita',
    link: '/cita'
  },
  {
    id: 5,
    name: 'Sobre nosotros',
    link: '/nosotros'
  }
]

const ITEMS_NAVBUTTONS = [
  {
    id: 1,
    name: 'Iniciar sesión',
    onClick: () => {
      alert('Iniciar sesión - alerta')
    }
  },
  {
    id: 2,
    name: 'Registrarse',
    onClick: () => {
      alert('Registrarse - alerta')
    }
  }
]

function NavLink({ to, children }: any) {
  const { pathname } = useRouter()

  return (
    <li>
      <Link href={to}>
        <a className={`${pathname === to ? 'border-b-2 font-bold border-primary-100' : ''}`}>
          {children}
        </a>
      </Link>
    </li>
  )
}

function MobileNav({ open, setOpen }: any) {
  return (
    <div
      className={`lg:hidden absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {/*logo container*/}
        <Link key={`${ITEM_COMPANY.id}`} href={`${ITEM_COMPANY.link}`}>
          <a
            className="text-2xl font-bold"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open)
              }, 100)
            }
          >{`${ITEM_COMPANY.name}`}</a>
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  )
}

export default function Header2() {
  const [open, setOpen] = useState(false)
  return (
    <header className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center md:px-12 lg:px-28 xl:px-60">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-4/12 flex items-center">
        <Link key={`${ITEM_COMPANY.id}`} href={`${ITEM_COMPANY.link}`}>
          <a className="text-2xl font-bold">{`${ITEM_COMPANY.name}`}</a>
        </Link>
      </div>
      <div className="w-8/12 flex justify-end items-center">
        {/* <div className="lg:hidden flex gap-4">
          <button
            type="button"
            className={`text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-4 py-2 text-center
            `}
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            className={`text-primary-700 bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 text-center
            `}
          >
            Registrarse
          </button>
        </div> */}
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center cursor-pointer lg:hidden"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-primary-700 rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-primary-700 rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-primary-700 rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>
        <nav>
          <ul className="hidden lg:flex gap-8">
            {ITEMS_NAVLINK.map(item => {
              const { id, name, link } = item
              return (
                <NavLink key={id} to={link}>
                  {name}
                </NavLink>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
