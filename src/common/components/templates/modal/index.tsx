import ModalAppointment from '@components/templates/modal/appointment'
import ModalLogin from '@components/templates/modal/login'
import ModalProduct from '@components/templates/modal/product'
import ModalRegister from '@components/templates/modal/register'
import ModalService from '@components/templates/modal/service'

const ValueTypeModal: { [key: string]: any } = {
  login: (props: any) => <ModalLogin toggleModal={props.toggleModal} />,
  register: () => <ModalRegister />,
  product: () => <ModalProduct />,
  service: () => <ModalService />,
  appointment: () => <ModalAppointment />
}

type Props = {
  type: string
  setType: any
  isModalVisible: any
  handleModal: any
}

const index = (props: Props) => {
  const toggleModal = () => props.handleModal()
  return (
    <section
      className={`${
        props.isModalVisible ? 'fixed' : 'hidden'
      } inset-0 w-full h-screen top-0 left-0 transform transition duration-300 ease-in-out bg-primary-700/60 grid place-items-center`}
    >
      <div
        className={`bg-white text-primary-700 border-lg w-[32rem] grid gap-6 p-8 relative rounded-lg`}
      >
        <button
          className="absolute top-8 right-8 p-2 transform transition-color duration-300 ease-in-out rounded-lg hover:bg-red-700/60 hover:text-gray-100"
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
        <div className="pt-10 font-bold text-center w-full text-lg">Bienvenido (a)</div>
        <div className="grid grid-cols-2 gap-5">
          <button
            className={`text-center py-2 border-b ${
              props.type === 'login'
                ? 'border-primary-700 text-primary-700'
                : 'border-gray-500 text-gray-500'
            } `}
            onClick={() => props.setType('login')}
          >
            Iniciar Sesión
          </button>
          <button
            className={`text-center py-2 border-b ${
              props.type === 'register'
                ? 'border-primary-700 text-primary-700'
                : 'border-gray-500 text-gray-500'
            } `}
            onClick={() => props.setType('register')}
          >
            Crear cuenta
          </button>
        </div>
        {ValueTypeModal[props.type](toggleModal)}
      </div>
    </section>
  )
}

export default index
