import Link from 'next/link'
import React from 'react'

type Props = {}

const ModalTemplate = (props: any) => {
  return (
    <>
      <section
        className={`${
          props.isModal ? 'fixed' : 'hidden'
        } w-full h-screen fixed top-0 left-0 transform transition duration-300 ease-in-out bg-primary-700/60 grid place-items-center`}
      >
        <div className="w-4/12 grid gap-8 bg-white p-8 rounded-xl">
          <div className="relative flex items-center">
            <p className="pt-10 font-bold text-center w-full text-lg">
              Bienvenido (a) {`${props.type === 'modal-login' ? 'LOGIN' : 'REGISTER'}`}
            </p>
            <button
              className="absolute top-0 right-0 p-2 transform transition-color duration-300 ease-in-out rounded-lg hover:bg-red-700/60 hover:text-gray-100"
              onClick={props.handleModal}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="Close-icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <button className="text-center py-2 border-b border-primary-700 text-primary-700">
              Iniciar Sesión
            </button>
            <button className="text-center py-2 border-b border-gray-500 text-gray-500">
              Crear cuenta
            </button>
          </div>
          <div className="grid gap-8">
            <div className="w-full grid gap-5">
              <label htmlFor="login-user">Usuario</label>
              <input
                className="w-full appearance-none border-2 border-gray-200 rounded px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
                id="login-user"
                type="text"
                // placeholder="Escriba su usuario"
              />
            </div>
            <div className="w-full grid gap-5">
              <label htmlFor="login-password">Contraseña</label>
              <input
                className="w-full appearance-none border-2 border-gray-200 rounded px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
                id="login-password"
                type="password"
                // placeholder="Escriba su contraseña"
              />
            </div>
          </div>
          <div className="grid gap-8 mb-8">
            <p className="text-red-500">¿Olvidaste la contraseña?</p>
            <button
              type="button"
              className={`w-full m-auto text-gray-100 bg-primary-700 hover:bg-primary-800 rounded-md px-4 py-2 text-center
          `}
            >
              Iniciar Sesión
            </button>
            <p className="text-right">
              ¿No tienes cuenta? <span className="text-red-500">Crea tu cuenta ahora</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ModalTemplate

/*

<button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="defaultModal"
      >
        Toggle modal
      </button>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy
                laws for its citizens, companies around the world are updating their terms of
                service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
                It requires organizations to notify users as soon as possible of high-risk data
                breaches that could personally affect them.
              </p>
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>

*/
