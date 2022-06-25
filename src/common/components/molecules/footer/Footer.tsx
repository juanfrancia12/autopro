import Link from 'next/link'

const ITEM_COMPANY = {
  id: 1,
  nombre: 'AUTOPRO',
  pais: 'Perú',
  departamento: 'Lima'
}

const FOOTER_CONTACTANOS = {
  title: 'Contáctanos',
  items: [
    {
      id: 1,
      nombre: 'Soporte al cliente',
      link: '#!'
    },
    {
      id: 2,
      nombre: 'Política de privacidad',
      link: '#!'
    },
    {
      id: 3,
      nombre: 'Términos y condiciones',
      link: '#!'
    }
  ]
}

const FOOTER_NOSOTROS = {
  title: 'Acerca de nosotros',
  items: [
    {
      id: 1,
      nombre: '¿Qué es AUTOPRO?',
      link: '#!'
    },
    {
      id: 2,
      nombre: 'Nuestro equipo',
      link: '#!'
    },
    {
      id: 3,
      nombre: 'Visión y misión',
      link: '#!'
    }
  ]
}

const FOOTER_ENLACES = {
  title: 'Enlaces',
  items: [
    {
      id: 1,
      nombre: 'Inicio',
      link: '#!'
    },
    {
      id: 2,
      nombre: 'Servicios',
      link: '#!'
    },
    {
      id: 3,
      nombre: 'Productos',
      link: '#!'
    },
    {
      id: 4,
      nombre: 'Reserva de cita',
      link: '#!'
    }
  ]
}

type Props = {}

const Footer = (props: Props) => {
  return (
    // <footer className="py-20 px-60 text-center lg:text-left bg-primary-800 text-gray-600 md:text-left">
    <footer className="text-center lg:text-left bg-primary-800 text-gray-600 px-4 py-20 md:px-12 lg:px-28 xl:px-60">
      <div className="h-max grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="">
          <h6
            className="
            uppercase
            font-semibold
            mb-4
            text-gray-100
            md:justify-start
          "
          >
            {ITEM_COMPANY.nombre}
          </h6>
          <div className="h-full grid content-between">
            <p>{`${ITEM_COMPANY.departamento} - ${ITEM_COMPANY.pais}`}</p>
            <div>ICONS SOCIAL MEDIA</div>
          </div>
        </div>
        <div className="">
          <h6 className=" uppercase font-semibold mb-4 text-gray-100 md:justify-start ">
            {FOOTER_CONTACTANOS.title}
          </h6>
          <div className="grid gap-2">
            {FOOTER_CONTACTANOS.items.map(item => {
              const { id, nombre, link } = item
              return (
                <p key={id} className="">
                  <Link href={link}>
                    <a className="text-gray-600">{nombre}</a>
                  </Link>
                </p>
              )
            })}
          </div>
        </div>
        <div className="">
          <h6 className=" uppercase font-semibold mb-4 text-gray-100 md:justify-start ">
            {FOOTER_NOSOTROS.title}
          </h6>
          <div className="grid gap-2">
            {FOOTER_NOSOTROS.items.map(item => {
              const { id, nombre, link } = item
              return (
                <p key={id} className="">
                  <Link href={link}>
                    <a className="text-gray-600">{nombre}</a>
                  </Link>
                </p>
              )
            })}
          </div>
        </div>
        <div className="bg-red-100">
          <h6 className=" uppercase font-semibold mb-4 text-gray-100 md:justify-start">Contact</h6>
          <div className="grid gap-2">
            {FOOTER_ENLACES.items.map(item => {
              const { id, nombre, link } = item
              return (
                <p key={id} className="">
                  <Link href={link}>
                    <a className="text-gray-600">{nombre}</a>
                  </Link>
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
