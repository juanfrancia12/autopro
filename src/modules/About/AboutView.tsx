type Props = {}

const itemsValores = [
  {
    id: 1,
    name: 'Calidad'
  },
  {
    id: 2,
    name: 'Compromiso'
  },
  {
    id: 3,
    name: 'Lealtad'
  },
  {
    id: 4,
    name: 'Respeto'
  },
  {
    id: 5,
    name: 'Honestidad'
  },
  {
    id: 6,
    name: 'Responsabilidad'
  }
]

const itemsNuestroEquipo = [
  {
    id: 1,
    image: '/imagenes/nosotros/nosotros-mecanico.png',
    name: 'José Fernandez',
    cargo: 'Director General',
    description:
      'Somos una empresa peruana dedicada al rubro automotriz, que brinda servicios como ensamblaje.',
    social_media: [
      {
        id: 10,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 11,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 12,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 13,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      }
    ]
  },
  {
    id: 2,
    image: '/imagenes/nosotros/nosotros-mecanico.png',
    name: 'José Fernandez',
    cargo: 'Recursos Humanos',
    description:
      'Somos una empresa peruana dedicada al rubro automotriz, que brinda servicios como ensamblaje.',
    social_media: [
      {
        id: 20,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 21,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 22,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      },
      {
        id: 23,
        name: 'LinkedIn',
        icon: '',
        url: 'http://www.linkedin.com'
      }
    ]
  }
]

const AboutView = (props: Props) => {
  return (
    <>
      {/* BANNER */}
      <section className="w-full h-80 md:min-h-[27rem] pt-28 pb-10 md:pb-16 bg-gradient-to-tr from-primary-600 to-primary-800 grid place-items-center responsive-screen-width">
        <div className="grid gap-6">
          <h1 className="text-gray-100 text-center text-xl md:text-3xl md:text-start lg:text-4xl font-bold">
            SOBRE NOSOTROS
          </h1>
          <div className="w-3/6 m-auto flex-grow border-t-2 border-gray-100"></div>
        </div>
      </section>
      {/* SOBRE LA EMPRESA */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 responsive-screen-width responsive-screen-height">
        <div className="lg:col-span-1 rounded-xl overflow-hidden">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full"
            src="/imagenes/nosotros/nosotros-mecanico.png"
          />
        </div>
        <div className="bg-primary-200 p-6 md:p-8 lg:col-span-2 rounded-xl overflow-hidden">
          <p className="text-lg md:text-xl font-bold">AUTOPRO</p>
          <p className="pt-2">
            Somos una empresa peruana dedicada al rubro automotriz, que brinda servicios como
            ensamblaje, reparación y mantenimiento de motores, lavado y planchado a vehículos en
            general.
          </p>
        </div>
        <div className="bg-yellow-100 p-6 md:p-8 lg:col-span-2 rounded-xl overflow-hidden">
          <p className="text-lg md:text-xl font-bold">MISIÓN Y VISIÓN</p>
          <p className="pt-2">
            Nuestra misión es brindar un buen servicio, conservando los autos de nuestros clientes
            en un estado de operación eficiente y seguro, satisfaciendo sus necesidades en el mejor
            tiempo posible.
          </p>
          <p className="pt-2">
            Nuestra visión es ser líder en el rubro automotriz, llevando confianza, honestidad y
            calidad a todos nuestros clientes. Además de contar con herramientas tecnológicas para
            una mayor eficiencia en el servicio.
          </p>
        </div>
        <div className="bg-green-100 p-6 md:p-8 lg:col-span-1 rounded-xl overflow-hidden">
          <p className="text-lg md:text-xl font-bold">VALORES</p>
          {itemsValores.map(item => {
            const { id, name } = item
            return (
              <li key={id} className="pt-2 pl-4 md:pl-6">
                {name}
              </li>
            )
          })}
        </div>
      </section>
      {/* DICEN LOS CLIENTES */}
      <section className="bg-gradient-to-tr from-primary-600 to-primary-800 grid responsive-screen-height responsive-screen-gap responsive-screen-width text-gray-100">
        <div className="w-full grid gap-2">
          <h2 className="text-xl font-bold text-center">LO QUE DICEN NUESTROS CLIENTES</h2>
          <p className="text-center">Tu opinión nos hace ser mejores</p>
        </div>
        <section className="w-full h-52 bg-blue-300"></section>
        <div className="w-full h-8 bg-blue-300"></div>
      </section>
      {/* NUESTRAS SUCURSALES */}
      <section className="grid responsive-screen-height responsive-screen-gap">
        <div className="w-full grid gap-2">
          <h2 className="text-xl font-bold text-center">CONOCE NUESTRAS SUCURSALES</h2>
          <p className="text-center">Puedes elegir entre todas nuestras sucursales</p>
        </div>

        <section className="w-full h-52 bg-blue-300">Slider 2</section>
      </section>
      {/* NUESTRO EQUIPO */}
      <section className="grid responsive-screen-gap responsive-screen-width responsive-screen-height">
        <div className="grid gap-2">
          <h2 className="text-xl font-bold text-center">CONOCE A NUESTRO EQUIPO</h2>
          <p className="text-center">Profesionales a cargo de los servicios</p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {itemsNuestroEquipo.map(item => {
            const { id, name, image, cargo, description, social_media } = item
            return (
              <div
                key={id}
                className="bg-blue-100 grid gap-5 grid-cols-1 p-6 md:p-8 md:grid-cols-2"
              >
                {name}
              </div>
            )
          })}
        </section>
      </section>
    </>
  )
}

export default AboutView
