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


import PersonIcon from 'assets/person_icon.svg';
import WatchIcon from 'assets/watch_icon.svg';
import PinIcon from 'assets/pin_icon.svg';
import InfoIcon from 'assets/info_icon.svg';
import PersonIconActive from 'assets/person_icon_active.svg';
import WatchIconActive from 'assets/watch_icon_active.svg';
import PinIconActive from 'assets/pin_icon_active.svg';
import InfoIconActive from 'assets/info_icon_active.svg';

import { push, goBack } from 'react-router-redux';

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

  constructor(props) {
    super(props);
    this.state = {
      pin1: false,
      pin2: false,
      pin3: false,
      pin4: false,
    }

    this.onPin1Change = this.onPin1Change.bind(this);
    this.onPin2Change = this.onPin2Change.bind(this);
    this.onPin3Change = this.onPin3Change.bind(this);
    this.onPin4Change = this.onPin4Change.bind(this);
  }

  onPin1Change(pinElement) {
    if(pinElement.target.value != '') {
      this.setState({
        ...this.state,
        pin1: true
      })
    }
  }

  onPin2Change(pinElement) {
    if(pinElement.target.value != '') {
      this.setState({
        ...this.state,
        pin2: true
      })
    }
  }

  onPin3Change(pinElement) {
    if(pinElement.target.value != '') {
      this.setState({
        ...this.state,
        pin3: true
      })
    }
  }

  onPin4Change(pinElement) {
    if(pinElement.target.value != '') {
      this.setState({
        ...this.state,
        pin4: true
      })
    }
  }

  render() {
    const { dispatch } = this.props;
    const { pin1, pin2, pin3, pin4 } = this.state;

    if(pin1 && pin2 && pin3 && pin4) {
      dispatch(push('/recommendation'));
    }

    const navigationItems = [
      {
        icon: PersonIcon,
        iconActive: PersonIconActive,
        onClick:  () => { dispatch(push('/profile')) }
      },
      {
        icon: PinIcon,
        iconActive: PinIconActive,
        onClick:  () => { dispatch(push('/building-map')) },
        isActive: true,
      },
      {
        icon: WatchIcon,
        iconActive: WatchIconActive,
        onClick: () => { dispatch(push('/parking-history')) }
      },
      {
        icon: InfoIcon,
        iconActive: InfoIconActive,
        onClick: () => {  dispatch(push('/parking-detail')) }
      }
    ]
    return (
      <div>
        <TitleBar back={true} help={true} title="Enter PIN Code" />
        <AppContainer>
          <div>
            <h3>Enter PIN on Receipt</h3>
            <InputWrapper>
              <input type="text" onChange={this.onPin1Change} />
              <input type="text" onChange={this.onPin2Change} />
              <input type="text" onChange={this.onPin3Change} />
              <input type="text" onChange={this.onPin4Change} />
            </InputWrapper>
          </div>
        </AppContainer>
        <BottomNavigationBar navigationItems={navigationItems} />
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
