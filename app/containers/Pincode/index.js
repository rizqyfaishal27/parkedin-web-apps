/*
 *
 * Pincode
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectPincode from './selectors';
import TitleBar from 'components/TitleBar';
import BottomNavigationBar from 'components/BottomNavigationBar';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  background-color: #F0F2F2;
  align-items: center;
  height: 80vh;
  & > div {
    padding: 4rem 3rem;
    background-color: #000;
    color: #fff;
    width: 100%;
    & > h3 {
      text-align: center;
    }

  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  flex-wrap: wrap;
  & > input {
    border-bottom: 3px solid #fff;
    margin: 1rem;
    text-align: center;
    width: 2rem;
    font-size: 2rem;
  }
`;

export class Pincode extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <TitleBar back={true} help={true} title="Enter PIN Code" />
        <AppContainer>
          <div>
            <h3>Enter PIN on Receipt</h3>
            <InputWrapper>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </InputWrapper>
          </div>
        </AppContainer>
        <BottomNavigationBar />
      </div>
    );
  }
}

Pincode.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  PINCode: makeSelectPincode(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pincode);
