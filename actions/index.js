import firebase from 'firebase'
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_ERROR, SHOW_SPINNER } from './types'

export const emailChanged = text => ({
  type: EMAIL_CHANGED, payload: text
})

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED, payload: text
})

export const loginUser = (email, password) => async dispatch => {
  try {
    dispatch({type: 'SHOW_SPINNER'})
    let user = await firebase.auth().signInWithEmailAndPassword(email, password)
    if (!user) user = await firebase.auth().createUserWithEmailAndPassword(email, password)
    dispatch({ type: LOGIN_USER, payload: user })
  } catch (error) {
    dispatch({ type: LOGIN_ERROR })
  }
}
