import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDL4znPhFnoLiKg7sOT8ls7yDFRnV1f4ME",
      authDomain: "employee-manager-8faef.firebaseapp.com",
      databaseURL: "https://employee-manager-8faef.firebaseio.com",
      projectId: "employee-manager-8faef",
      storageBucket: "employee-manager-8faef.appspot.com",
      messagingSenderId: "26772640181"
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
