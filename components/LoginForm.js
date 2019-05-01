import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import { emailChanged, passwordChanged } from '../actions'

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text)
  }

  onPasswordChange = text => {
    this.props.passwordChanged(text)
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
        <Button>Login</Button>
      </Card>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password
}
)
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm)
