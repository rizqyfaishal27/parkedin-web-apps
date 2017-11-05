/*
 *
 * RedeemPoints
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectRedeemPoints from './selectors';
import BottomNavigationBar from 'components/BottomNavigationBar';
import ParkingLotMap from 'assets/parking_lot.png';
import MarkerIcon from 'assets/pin_icon.svg';
import WatchIcon from 'assets/watch_icon.svg';
import styled from 'styled-components'; 
import Select from 'react-select';
import TitleBar from 'components/TitleBar';
import PersonIcon from 'assets/person_icon.svg';
import PinIcon from 'assets/pin_icon.svg';
import InfoIcon from 'assets/info_icon.svg';
import PersonIconActive from 'assets/person_icon_active.svg';
import WatchIconActive from 'assets/watch_icon_active.svg';
import PinIconActive from 'assets/pin_icon_active.svg';
import InfoIconActive from 'assets/info_icon_active.svg';
import { Button } from 'semantic-ui-react';

import TupperwareImage from 'assets/tupperware.jpg';
import IndomieImage from 'assets/indomie.jpg';
import LinePointsImage from 'assets/linepoints.jpg'


import MedalIcon from 'assets/medal.svg';

const AppContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  background-color: #F0F2F2;
  align-items: space-around;
  flex-wrap: wrap;
`
const ContentWrapper = styled.div`
  background-color: #ffffff;
  margin: 0.5rem;
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column' };
  padding: 0.5rem;
  align-items: ${props => props.align };
  justify-content: ${props => props.justifyContent };
  & > h2 {
    position: relative;
    margin: 0.5rem;
  }

  & > div {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;
      & > h3 {
        margin: 0 0 0.5rem 0;
      }

      &:first-child {
        padding: 0.5rem;
      }
    }

  }
`;

const Border = styled.div`
  height: 2px;
  border-top: 1px solid lightgrey;
  width: 100%;
`;


export class RedeemPoints extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const navigationItems = [
      {
        icon: PersonIcon,
        iconActive: PersonIconActive,
        isActive: true,
        onClick:  () => { dispatch(push('/profile')) }
      },
      {
        icon: PinIcon,
        iconActive: PinIconActive,
        onClick:  () => { dispatch(push('/building-map')) }
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
        <TitleBar back={true} help={true} title="Redeem Your Points" />
        <AppContainer>
          <ContentWrapper row justifyContent="center">
            <img src={MedalIcon} role="presentation" height="45px" />
            <h2>7008 <small 
              style={{ 'fontWeight': '300', 'fontSize': '12px', 'top': '-11px', 'right': '-20px', 'position': 'absolute' }}>pts</small></h2>
          </ContentWrapper>
          <ContentWrapper column align="flex-start" justifyContent="flex-start">
            <h3>Redeem Your Points</h3>
            <div>
                <div>
                  <img src={TupperwareImage} role="presentation" width="70px" />
                </div>
                <div>
                  <h3>Tupperware</h3>
                  <p>Get 1 exclusive tupperware package</p>
                </div>
                <div>
                  <h3>5000 pts</h3>
                  <Button>Redeem</Button>
                </div>
            </div>
            <Border />
            <div>
                <div>
                  <img src={IndomieImage} role="presentation" width="70px" />
                </div>
                <div>
                  <h3>Indomie</h3>
                  <p>Get 1 box of indomie Goreng Soto!</p>
                </div>
                <div>
                  <h3>1000 pts</h3>
                  <Button>Redeem</Button>
                </div>
            </div>
            <Border />
            <div>
                <div>
                  <img src={LinePointsImage} role="presentation" width="70px" />
                </div>
                <div>
                  <h3>Line Points</h3>
                  <p>Get 5000 points of Line Points</p>
                </div>
                <div>
                  <h3>5000 pts</h3>
                  <Button>Redeem</Button>
                </div>
            </div>
          </ContentWrapper>
        </AppContainer> 
        <BottomNavigationBar navigationItems={navigationItems} />
      </div>
    );
  }
}

RedeemPoints.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  RedeemPoints: makeSelectRedeemPoints(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RedeemPoints);
