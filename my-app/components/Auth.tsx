import React, { FC, createContext, useEffect, useState } from 'react'
import firebase from '../utils/Firebase'
import firebaseType from 'firebase'
import { SignIn } from './SignIn'

type AuthContextProps = {
  currentUser: firebaseType.User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<
    firebaseType.User | null | undefined
  >(undefined)

  useEffect(() => {
    // @ts-ignore
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  if (currentUser) {
    return (
      <AuthContext.Provider value={{ currentUser: currentUser }}>
        {children}
      </AuthContext.Provider>
    )
  } else if (currentUser === undefined) {
    return <p>認証情報を読み込んでいます</p>
  } else {
    return <SignIn />
  }
}

export { AuthContext, AuthProvider }
