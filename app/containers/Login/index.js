/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input, Button } from 'semantic-ui-react';
import makeSelectLogin from './selectors';
import styled from 'styled-components';
import Logo from 'assets/logo-new.png';
import makeSelectGlobal from 'global-selectors';
import { push } from 'react-router-redux';
import LoaderIcon from 'assets/loader.svg';
import { loginRequest, fetchLogin } from 'global-actions';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  height: 100vh;
  background-color: #F0F2F2;
  align-items: ${props => props.center ? 'center' : 'space-around'};
  flex-wrap: wrap;
  padding: 2rem;
`

const CompanyLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & > img {
    height: 100px;
  }
  & > h1 {
    margin-left: 1rem;
  }
  margin-bottom: 1rem;
`

const InputWrapper = styled.div`
  margin: 0.5rem 0;
`



export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.onLoginClickButton = this.onLoginClickButton.bind(this);
    this.state = {
      email: '',
      password: '',
    }
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  componentWillMount() {
    const { Global, dispatch } = this.props;
    console.log(Global);
    if(Global.isLoggedIn) {
      if(!Global.userLoaded) {
        dispatch(fetchLogin());
      }
      dispatch(push('/profile'));
    }
  }

  onLoginClickButton() {
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if(email != '' && password != '') {
      console.log(this.state);
      dispatch(loginRequest({ email, password }));
    }
  }

  onEmailChange(emailElement) {
    const newState = {
      ...this.state,
      email: emailElement.target.value
    }

    this.setState(newState);
  }

  onPasswordChange(passwordElement) {
    const newState = {
      ...this.state,
      password: passwordElement.target.value
    }

    this.setState(newState);
  }

  render() {
    const { Global } = this.props;
    if (Global.isSending || Global.isLoggedIn) {
      return <AppContainer center>
        <div>
          <img src={LoaderIcon} role="presentation"/>
        </div>
      </AppContainer>
    }
    return (
      <AppContainer>
        <CompanyLogo>
          <img src={Logo} role="presentation" />
          <h1>ParkedIn</h1>
        </CompanyLogo>
        <div>
          <InputWrapper>
            <Input placeholder="Username or email" fluid={true} value={this.state.email} onChange={this.onEmailChange}/>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="Password" type="password" fluid={true} value={this.state.password} onChange={this.onPasswordChange}/>
          </InputWrapper>
          <InputWrapper>
            <Button disabled={this.state.email == '' || this.state.password == '' } primary fluid onClick={this.onLoginClickButton}>Login</Button>
          </InputWrapper>
        </div>
      </AppContainer>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Login: makeSelectLogin(),
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
