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
  render() {
    return (
      <div>
        <TitleBar help={true} back={true} title="Parking Detail" />
        <AppContainer>
          <ContentWrapper>
            <h3>Your Parkng Detail</h3>
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
            <Button primary>Pay Now</Button>
          </ContentWrapper>
        </AppContainer>
        <BottomNavigationBar />
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
