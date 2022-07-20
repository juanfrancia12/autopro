import { UserData } from 'mock2/data/user.data'
import { createContext, useContext, useState } from 'react'

export const UserContext = createContext({})

type Props = {
  children: React.ReactNode
}

export const UserProvider = (props: Props) => {
  const [users, setUsers] = useState(UserData)

  const createUser = (name: string, email: string, password: string, uri: string) => {
    const uriUser = uri

    setUsers([...users, { id: users.length + 1 || 1, name, email, password, uri: uriUser }])
  }

  const updateUser = (id: number, updatedUser: object) =>
    setUsers([...users.map(user => (user.id === id ? { ...user, ...updatedUser } : user))])

  const deleteUser = (id: number) => setUsers([...users.filter(user => user.id !== id)])

  return (
    <UserContext.Provider
      value={{
        users,
        createUser,
        updateUser,
        deleteUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export const useUsers = () => useContext(UserContext)
