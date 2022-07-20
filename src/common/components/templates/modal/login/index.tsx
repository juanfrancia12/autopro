import { useUsers } from 'mock2/context/user.context'
import React, { useState } from 'react'

const inititalState = {
  email: '',
  password: ''
}

type Props = {
  toggleModal: any
}

const nombre = 'juan'

const index = (props: Props) => {
  const [loginUser, setLoginUser] = useState(inititalState)

  const onSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const nombre = 'juan'

    if (nombre) {
      props.toggleModal()
    }
  }

  return (
    <form onSubmit={onSubmitLogin}>
      <button type="submit">Iniciar sesión</button>
    </form>
  )
}

export default index
