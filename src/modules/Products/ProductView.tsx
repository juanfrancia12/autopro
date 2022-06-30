const DATOS_PRODUCTOS = [
  {
    id: 1,
    image: '/images/home/servicio-4.webp',
    nombre: 'Acura Wheels ZW 213 (R15 W6.5 PCD5x120 ET15)',
    descripcion: 'Descripción del servicio ofrecido por la mecánica automotriz en el perú.',
    precio: 120
  },
  {
    id: 2,
    image: '/images/home/servicio-2.jpg',
    nombre: 'CARQUEST Standard Oil Filter',
    descripcion: 'Descripción del servicio ofrecido por la mecánica automotriz en el perú.',
    precio: 96
  },
  {
    id: 3,
    image: '/images/home/servicio-5.jpg',
    nombre: 'CARQUEST Starter - Remanufactured',
    descripcion: 'Descripción del servicio ofrecido por la mecánica automotriz en el perú.',
    precio: 112
  },
  {
    id: 4,
    image: '/images/home/servicio-1.jpg',
    nombre: 'Driveworks Hub Bearing Assembly',
    descripcion: 'Descripción del servicio ofrecido por la mecánica automotriz en el perú.',
    precio: 75
  },
  {
    id: 5,
    image: '/images/home/servicio-6.jpg',
    nombre: 'Driveworks Starter - Remanufactured',
    descripcion: 'Descripción del servicio ofrecido por la mecánica automotriz en el perú.',
    precio: 142
  },
  {
    id: 6,
    image: '/images/home/servicio-3.jpg',
    nombre: 'Mobil1 High Mileage, Full Synthetic Motor Oil, 5W-30',
    descripcion: 'Descripción del servicio ofrecido por la mecánica automotriz en el perú.',
    precio: 165
  },
  {
    id: 7,
    image: '/images/home/servicio-3.jpg',
    nombre: 'PBT USA 4 in 1 Brake Pad Spreader',
    descripcion: 'Descripción del servicio ofrecido por la mecánica automotriz en el perú.',
    precio: 103
  },
  {
    id: 8,
    image: '/images/home/servicio-3.jpg',
    nombre: 'PBT USA Heavy Duty Wrack Wre',
    descripcion: 'Descripción del servicio ofrecido por la mecánica automotriz en el perú.',
    precio: 95
  }
]

const ProductView = () => {
  return (
    <>
      {/* BANNER */}
      <section className="w-full h-80 md:min-h-[27rem] pt-28 pb-10 md:pb-16 bg-gradient-to-tr from-primary-600 to-primary-800 grid place-items-center responsive-screen-width">
        <div className="grid gap-6">
          <h1 className="text-gray-100 text-center text-xl md:text-3xl md:text-start lg:text-4xl font-bold">
            NUESTROS PRODUCTOS
          </h1>
          <div className="w-3/6 m-auto flex-grow border-t-2 border-gray-100"></div>
        </div>
      </section>
      {/* SERVICIOS OFERTA */}
      <section className="bg-primary-200 grid responsive-screen-height responsive-screen-gap">
        <div className="w-full grid gap-2">
          <h2 className="text-xl font-bold text-center">PRODUCTOS EN OFERTA</h2>
          <p className="text-center text-red-500">*Por tiempo limitado</p>
        </div>
        <section className="grid gap-8 md:gap-14">
          <div className="w-full h-52 bg-blue-300">Slider 1</div>
          <div className="w-full h-52 bg-blue-300">Slider 2</div>
        </section>
      </section>
      {/* LISTA NUESTROS SERVICIOS */}
      <section className="grid responsive-screen-gap responsive-screen-width responsive-screen-height">
        <h2 className="text-xl font-bold text-center">LISTA DE NUESTROS SERVICIOS</h2>
        <div className="w-full grid gap-8">
          <div className="grid sm:flex gap-4">
            <div className="sm:w-72 inline-block relative">
              <input
                className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
                id="inline-full-name"
                type="text"
                placeholder="Empieza a buscar..."
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="w-5 h-5 text-primary-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="inline-block relative sm:w-64">
              <select
                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-primary-80 bg-gray-200 bg-clip-padding bg-no-repeat border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-primary-800 focus:bg-white focus:border-primary-500 focus:outline-none"
                aria-label="Select service"
              >
                <option value="default" selected>
                  Todos
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary-800">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <section className="w-full overflow-hidden">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {DATOS_PRODUCTOS.map(item => {
                  const { id, image, nombre, descripcion, precio } = item
                  return (
                    <div
                      key={id}
                      className="h-auto relative md:h-[27rem] rounded-2xl border border-gray-300 overflow-hidden"
                    >
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-52 transition-scale duration-500 hover:scale-[1.1]"
                        src={image}
                      />
                      <div className="grid gap-6 py-6 px-6">
                        <h3 className="font-bold truncate ">{nombre}</h3>
                        <p>{descripcion}</p>
                        <button
                          type="button"
                          className={`w-full m-auto text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-4 py-2 text-center
          `}
                        >
                          Solicitar servicio
                        </button>
                      </div>
                      <div className="absolute top-4 right-0 bg-yellow-300 px-4 py-2 font-semibold rounded-l-md">{`S/. ${precio.toFixed(
                        2
                      )}`}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default ProductView
