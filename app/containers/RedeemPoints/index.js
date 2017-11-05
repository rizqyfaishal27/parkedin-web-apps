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

const navigationItems = [
  {
    icon: PersonIcon,
    iconActive: PersonIconActive,
  },
  {
    icon: PinIcon,
    iconActive: PinIconActive,
  },
  {
    icon: WatchIcon,
    iconActive: WatchIconActive,
  },
  {
    icon: InfoIcon,
    iconActive: InfoIconActive,
    isActive: true
  }
];

export class RedeemPoints extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <TitleBar back={true} help={true} title="Redeem Your Points" />
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
