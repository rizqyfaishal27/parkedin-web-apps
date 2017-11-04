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

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  height: 100vh;
  background-color: #F0F2F2;
  align-items: space-around;
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
  render() {
    return (
      <AppContainer>
        <CompanyLogo>
          <img src={Logo} role="presentation" />
          <h1>ParkedIn</h1>
        </CompanyLogo>
        <div>
          <InputWrapper>
            <Input placeholder="Username or email" fluid={true}/>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="Password" type="password" fluid={true}/>
          </InputWrapper>
          <InputWrapper>
            <Button primary fluid>Login</Button>
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
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
