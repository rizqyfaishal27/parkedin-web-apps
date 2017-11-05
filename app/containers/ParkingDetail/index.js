/*
 *
 * ParkingDetail
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectParkingDetail from './selectors';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import TitleBar from 'components/TitleBar';
import BottomNavigationBar from 'components/BottomNavigationBar';
import ParkingLotMap from 'assets/parking_lot.png';
import MarkerIcon from 'assets/pin_icon.svg';
import WatchIcon from 'assets/watch_icon.svg';

import { push, goBack } from 'react-router-redux';
import PersonIcon from 'assets/person_icon.svg';
import PinIcon from 'assets/pin_icon.svg';
import InfoIcon from 'assets/info_icon.svg';
import PersonIconActive from 'assets/person_icon_active.svg';
import WatchIconActive from 'assets/watch_icon_active.svg';
import PinIconActive from 'assets/pin_icon_active.svg';
import InfoIconActive from 'assets/info_icon_active.svg';

import swal from 'sweetalert';


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
  padding: 1rem;
  align-items: center;
  justify-content: center;
  & > h3 {
    margin: 0.5rem;
  }

  &.start {
    align-items: start;
  }

  & > h4 {
    & > img {
      margin: 0 1rem 0 -0.5rem;
    }
    margin: 0.5rem;
  }
`;

const Border = styled.div`
  height: 2px;
  border-top: 1px solid lightgrey;
  width: 100%;
`

export class ParkingDetail extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.onPayNowClick = this.onPayNowClick.bind(this);
  }

  onPayNowClick() {
    const { dispatch } = this.props;
    swal({
      title: 'Succesfully paid!',
      text: 'Your remaining saldo: Rp. 50.000,00',
      icon: 'success',
      button: 'Ok!'
    })
    .then(press => {
      if(press) {
        dispatch(push('/parking-history'));
      }
    })
  }

  render() {

    const { dispatch } = this.props;
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
      },
      {
        icon: WatchIcon,
        iconActive: WatchIconActive,
        onClick: () => { dispatch(push('/parking-history')) }
      },
      {
        icon: InfoIcon,
        iconActive: InfoIconActive,
        onClick: () => {  dispatch(push('/parking-detail')) },
        isActive: true,
      }
    ]
    return (
      <div>
        <TitleBar help={true} back={true} title="Parking Detail" onBackIconClick={() => { dispatch(goBack())} }/>
        <AppContainer>
          <ContentWrapper>
            <h3>Your Parking Detail</h3>
            <h1>IDR 9.000,00</h1>
          </ContentWrapper>
          <ContentWrapper className="start">
            <h4>
              <img src={WatchIcon} role="presentation" height="16px" />
              07.03 PM - 09.57 PM
            </h4>
            <Border />
            <h4>
              <img src={MarkerIcon} role="presentation" height="16px" />
              ABC Plaza Building, 1st Floor C-29
            </h4>
          </ContentWrapper>
          <ContentWrapper>
            <Button primary onClick={this.onPayNowClick}>Pay Now</Button>
          </ContentWrapper>
        </AppContainer>
        <BottomNavigationBar navigationItems={navigationItems} />
      </div>
    );
  }
}

ParkingDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ParkingDetail: makeSelectParkingDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingDetail);
