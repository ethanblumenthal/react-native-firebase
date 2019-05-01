import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import config from './config'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
