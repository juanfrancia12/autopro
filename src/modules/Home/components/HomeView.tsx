import Image from 'next/image'

const NameComponentOrDirectory = () => {
  return (
    <>
      {/* BANNER */}
      <section className="w-full h-[35rem] pt-20 bg-gradient-to-tr from-primary-600 to-primary-800 px-60 grid place-items-center">
        <div className="w-full flex justify-between container mx-auto">
          <div className="w-6/12 grid text-gray-100 gap-8">
            <h1 className="text-4xl font-bold">MECÁNICA AUTOMOTRIZ</h1>
            <p className="text-xl">
              Somos AUTOPRO, una mecánica automotriz que brinda productos a precios accesibles y
              servicios con excelentes profesionales que se encargan de ello.
            </p>
            <div className="flex gap-12">
              <button
                type="button"
                className={`text-primary-700 bg-gray-100 hover:bg-gray-200 rounded-md px-8 py-2.5 text-center
            `}
              >
                Ver los servicios
              </button>
              <button
                type="button"
                className={`text-gray-100 border border-gray-100 transition-colors duration-300 hover:bg-gray-200 hover:text-primary-700 rounded-md px-8 py-2.5 text-center
            `}
              >
                Ver los productos
              </button>
            </div>
          </div>
          {/* <div className="w-full relative bg-blue-300 grid place-content-center">
            <img
              src={'/images/banner-home.png'}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div> */}

          {/* <div className="w-full relative grid place-content-center"> */}
          <div className="w-5/12 relative">
            <Image
              src={'/images/home/banner-home.png'}
              alt="imagen logo"
              layout="fill"
              // objectFit="none" //cover
              priority={true}
            />
          </div>
        </div>
      </section>
      {/* RECIBIR AUTOPRO */}
      <section className="py-20 px-60 grid gap-14">
        <h2 className="text-xl font-bold text-center">¿QUÉ VAS A RECIBIR DE AUTOPRO?</h2>
        <section className="w-full overflow-hidden">
          <div className="container h-[35rem] mx-auto">
            <div className="h-full grid grid-cols-2 gap-5">
              <div className="w-full relative rounded-2xl border border-gray-300 overflow-hidden md:p-0">
                <img
                  alt="gallery"
                  // className="block object-cover object-center w-full h-full rounded-lg border border-gray-300"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="/images/home/recibir-1.jpg"
                />
                <p className="absolute bottom-0 left-0 w-full bg-primary-700/80 h-16 grid place-items-center text-center text-gray-100 font-bold px-2">
                  MECÁNICOS ESPECIALISTAS
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="relative rounded-2xl border border-gray-300 overflow-hidden md:p-0">
                  <img
                    alt="gallery"
                    // className="block object-cover object-center w-full h-full rounded-lg border border-gray-300"
                    className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                    src="/images/home/recibir-2.jpg"
                  />
                  <p className="absolute bottom-0 left-0 w-full bg-primary-700/80 h-16 grid place-items-center text-center text-gray-100 font-bold px-2">
                    ASESORÍA MECÁNICA
                  </p>
                </div>
                <div className="relative rounded-2xl border border-gray-300 overflow-hidden md:p-0">
                  <img
                    alt="gallery"
                    // className="block object-cover object-center w-full h-full rounded-lg border border-gray-300"
                    className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                    src="/images/home/recibir-3.jpg"
                  />
                  <p className="absolute bottom-0 left-0 w-full bg-primary-700/80 h-16 grid place-items-center text-center text-gray-100 font-bold px-2">
                    TALLER EN CASA O EN OFICINA
                  </p>
                </div>
                <div className="relative rounded-2xl border border-gray-300 overflow-hidden md:p-0">
                  <img
                    alt="gallery"
                    // className="block object-cover object-center w-full h-full rounded-lg border border-gray-300"
                    className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                    src="/images/home/recibir-4.webp"
                  />
                  <p className="absolute bottom-0 left-0 w-full bg-primary-700/80 h-16 grid place-items-center text-center text-gray-100 font-bold px-2">
                    CALIDAD INSUPERABLE
                  </p>
                </div>
                <div className="relative rounded-2xl border border-gray-300 grid place-items-center overflow-hidden md:p-0">
                  <img
                    alt="gallery"
                    // className="block object-cover object-center w-full h-full rounded-lg border border-gray-300"
                    className="block transition-scale duration-500 hover:scale-[1.1]"
                    src="/images/home/recibir-5.png"
                  />
                  <p className="absolute bottom-0 left-0 w-full bg-primary-700/80 h-16 grid place-items-center text-center text-gray-100 font-bold px-2">
                    GARANTÍA DEL SERVICIO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* TODOS PRODUCTOS */}
      <section className="py-20 bg-primary-200 grid gap-14">
        <div className="w-full px-60 grid gap-2">
          <h2 className="text-xl font-bold text-center">TODOS LOS PRODUCTOS QUE NECESITAS</h2>
          <p className="text-center">A precios accesibles y de alta calidad</p>
        </div>
        <section className="grid gap-14">
          <div className="w-full h-52 bg-blue-300">Slider 1</div>
          <div className="w-full h-52 bg-blue-300">Slider 2</div>
        </section>
        <button
          type="button"
          className={`w-max m-auto text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-4 py-2 text-center
            `}
        >
          Conoce todos nuestros productos
        </button>
      </section>
      {/* SERVICIO OFRECE */}
      <section className="py-20 px-60 grid gap-14">
        <div className="w-full px-60 grid gap-2">
          <h2 className="text-xl font-bold text-center">¿QUÉ SERVICIOS OFRECEMOS?</h2>
          <p className="text-center">Contamos con excelentes profersionales</p>
        </div>
        <section className="w-full overflow-hidden">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-5">
              <div className="w-full h-[22rem] rounded-2xl border border-gray-300 overflow-hidden">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="/images/home/servicio-1.jpg"
                />
              </div>
              <div className="w-full h-[22rem] rounded-2xl border border-gray-300 overflow-hidden">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="/images/home/servicio-2.jpg"
                />
              </div>
              <div className="w-full h-[22rem] rounded-2xl border border-gray-300 overflow-hidden">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="/images/home/servicio-3.jpg"
                />
              </div>
              <div className="w-full h-[22rem] rounded-2xl border border-gray-300 overflow-hidden">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="/images/home/servicio-4.webp"
                />
              </div>
              <div className="w-full h-[22rem] rounded-2xl border border-gray-300 overflow-hidden">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="/images/home/servicio-5.jpg"
                />
              </div>
              <div className="w-full h-[22rem] rounded-2xl border border-gray-300 overflow-hidden">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="/images/home/servicio-6.jpg"
                />
              </div>
            </div>
          </div>
        </section>
        <button
          type="button"
          className={`w-max m-auto text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-4 py-2 text-center
            `}
        >
          Conoce todos nuestros servicios
        </button>
      </section>
      {/* SOBRE NOSOTROS */}
      <section className="py-20 px-60 bg-primary-200 grid grid-cols-2 gap-5">
        <div className="w-full h-auto rounded-2xl border border-gray-300 overflow-hidden">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
            src="/images/home/sobre_nosotros.jpg"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <h3 className="text-xl font-bold">SOBRE NOSOTROS</h3>
          <p className="text-lg">
            Somos una empresa peruana dedicada al rubro automotriz. Nuestra misión es ofrecer los
            mejores productos y servicios a nuestros clientes, procurando tengan la mejor
            experiencia en todo momento...
          </p>
          <button
            type="button"
            className={`w-max min-w-[8rem] text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-4 py-2 text-center
            `}
          >
            Ver más
          </button>
        </div>
      </section>
      {/* NUESTROS PROVEEDORES */}
      <section className="py-20 grid gap-14 bg-red-200">
        <h2 className="text-xl font-bold text-center">NUESTROS PROVEEDORES</h2>
        <section className="w-full h-52 bg-blue-300">Slider 2</section>
      </section>
      {/* NUESTROS CLIENTES */}
      <section className="my-14 py-20 px-60 bg-gradient-to-tr from-primary-600 to-primary-800 -skew-y-[4deg] text-gray-100">
        <div className="skew-y-[4deg] grid gap-14">
          <h2 className="text-xl font-bold text-center text-gray-100">NUESTROS CLIENTES</h2>
          <section className="w-full overflow-hidden blue-300">
            <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                    src="/images/home/servicio-1.jpg"
                  />
                </div>
                <div className="col-span-2 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                    src="/images/home/servicio-2.jpg"
                  />
                </div>
                <div className="col-span-4 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                    src="/images/home/servicio-3.jpg"
                  />
                </div>
                <div className="col-span-3 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                    src="/images/home/servicio-4.webp"
                  />
                </div>
                <div className="col-span-5 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                    src="/images/home/servicio-5.jpg"
                  />
                </div>
                <div className="col-span-3 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                    src="/images/home/servicio-6.jpg"
                  />
                </div>
                <div className="col-span-4 h-52 rounded-2xl border border-gray-300 overflow-hidden">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                    src="/images/home/servicio-6.jpg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* RESERVAR CITA */}
      <section className="mt-14 py-32 px-60 grid gap-14">
        <div className="w-full px-60 grid gap-2">
          <h2 className="text-xl font-bold text-center">¿QUIERES RESERVAR UNA CITA?</h2>
          <p className="text-center">
            Puedes reservar una cita para tu atención y así ahorres tiempo
          </p>
        </div>
        <button
          type="button"
          className={`w-max m-auto text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-8 py-2 text-center
            `}
        >
          Reservar cita
        </button>
      </section>
      {/* UBICACION */}
      <section className="py-20 px-60 bg-primary-200 grid gap-14">
        <h2 className="text-xl font-bold text-center">NUESTRA UBICACIÓN</h2>
        <div className="w-full h-96 relative rounded-2xl overflow-hidden">
          <Image
            src={'/imagenes/inicio/nuestra-ubicacion/google-mapa.jpg'}
            alt="imagen logo"
            layout="fill"
            objectFit="cover" //cover
          />
        </div>
      </section>
    </>
  )
}

export default NameComponentOrDirectory
