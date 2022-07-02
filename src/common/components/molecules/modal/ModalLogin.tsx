import React from 'react'

type Props = {}

const ModalLogin = (props: Props) => {
  return (
    <>
      <div className="grid gap-8">
        <div className="w-full grid gap-5">
          <label htmlFor="login-user">Usuario</label>
          <input
            className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
            id="login-user"
            type="text"
            // placeholder="Escriba su usuario"
          />
        </div>
        <div className="w-full grid gap-5">
          <label htmlFor="login-password">Contraseña</label>
          <input
            className="w-full appearance-none border-2 border-gray-200 rounded-lg px-4 py-2 text-primary-800 leading-tight placeholder-primary-800 focus:outline-none focus:bg-white focus:border-primary-500"
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
    </>
  )
}

export default ModalLogin
