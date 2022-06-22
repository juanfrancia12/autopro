import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

const NameComponentOrDirectory = () => {
  return (
    <>
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
      <section className="py-20 px-60 grid gap-14">
        <div className="w-full px-60 grid gap-2">
          <h2 className="text-xl font-bold text-center">¿QUÉ SERVICIOS OFRECEMOS?</h2>
          <p className="text-center">Contamos con excelentes profersionales</p>
        </div>
        <section className="w-full overflow-hidden">
          <div className="container h-[44rem] mx-auto">
            <div className="h-full grid grid-cols-3 gap-5">
              <div className="w-full rounded-2xl border border-gray-300 overflow-hidden">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
              <div className="w-full rounded-2xl border border-gray-300 overflow-hidden">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
              <div className="w-full rounded-2xl border border-gray-300 overflow-hidden">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div className="w-full rounded-2xl border border-gray-300 overflow-hidden">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div className="w-full rounded-2xl border border-gray-300 overflow-hidden">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
                />
              </div>
              <div className="w-full rounded-2xl border border-gray-300 overflow-hidden">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full transition-scale duration-500 hover:scale-[1.1]"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
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
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  )
}

export default NameComponentOrDirectory
