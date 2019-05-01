import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_ERROR, SHOW_SPINNER } from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: '',
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case LOGIN_USER:
      return { ...state, ...INITIAL_STATE, user: action.payload }
    case LOGIN_ERROR:
      return { ...state, error: 'Authentication Error', loading: false }
    case SHOW_SPINNER:
      return { ...state, loading: true }
    default:
      return state
  }
}
