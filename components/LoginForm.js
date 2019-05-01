import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text)
  }

  onPasswordChange = text => {
    this.props.passwordChanged(text)
  }

  onButtonPress = () => {
    const { email, password } = this.props
    this.props.loginUser(email, password)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>
        <Button onPress={this.onButtonPress}>Login</Button>
      </Card>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password
}
)
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)
