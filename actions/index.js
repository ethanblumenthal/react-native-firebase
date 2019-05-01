import firebase from 'firebase'
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER } from './types'

export const emailChanged = text => ({
  type: EMAIL_CHANGED, payload: text
})

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED, payload: text
})

export const loginUser = (email, password) => async dispatch => {
  const user = await firebase.auth().signInWithEmailAndPassword(email, password)
  dispatch({ type: LOGIN_USER, payload: user })
}
