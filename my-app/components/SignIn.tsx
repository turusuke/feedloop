import React, { FC, useEffect, useContext } from 'react'
import Router from 'next/router'
import firebase from '../utils/Firebase'
import GoogleButton from 'react-google-button'
import { AuthContext } from './Auth'

export const SignIn: FC = () => {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    currentUser && Router.push('/')
  }, [currentUser])

  const login = () => {
    if (!firebase.auth) return
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }
  return (
    <div className="container">
      <GoogleButton onClick={login} />
    </div>
  )
}
