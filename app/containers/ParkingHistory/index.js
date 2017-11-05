/*
 *
 * ParkingHistory
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectParkingHistory from './selectors';
import TitleBar from 'components/TitleBar';
import BottomNavigationBar from 'components/BottomNavigationBar';
import ParkingLotMap from 'assets/parking_lot.png';
import MarkerIcon from 'assets/pin_icon.svg';
import WatchIcon from 'assets/watch_icon.svg';
import styled from 'styled-components'; 
import Select from 'react-select';

import PersonIcon from 'assets/person_icon.svg';
import PinIcon from 'assets/pin_icon.svg';
import InfoIcon from 'assets/info_icon.svg';
import PersonIconActive from 'assets/person_icon_active.svg';
import WatchIconActive from 'assets/watch_icon_active.svg';
import PinIconActive from 'assets/pin_icon_active.svg';
import InfoIconActive from 'assets/info_icon_active.svg';

import { push, goBack } from 'react-router-redux';
import 'react-select/dist/react-select.css';
const options = [
  { value: 'last-mont', label: 'Last Month' },
  { value: 'last-week', label: 'Last Week' }
];

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
  & > h3 {
    margin: 0.5rem;
  }

  &.center {
    align-items: center;
  }

  &.start {
    & > div {
      width: 120px;
    }
    align-items: start;
  }

  & > h4 {
    & > img {
      margin: 0 1rem 0 -0.5rem;
    }
    margin: 0.5rem;
  }
`;

const ParkingHistoryItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }


  & > div:last-child {
    align-items: flex-end;
    justify-content: center;
  }

  & > div > p {
    margin: 0.2rem 0;
  }
`;

const Border = styled.div`
  height: 2px;
  border-top: 1px solid lightgrey;
  width: 100%;
`


export class ParkingHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        onClick: () => { dispatch(push('/parking-history')) },
        isActive: true,
      },
      {
        icon: InfoIcon,
        iconActive: InfoIconActive,
        onClick: () => {  dispatch(push('/parking-detail')) },
        
      }
    ]
    return (
      <div>
        <TitleBar help={true} back={true} title="Parking History" onBackIconClick={() => { dispatch(goBack())} } />
        <AppContainer>
          <ContentWrapper row className="start">
            <Select options={options} />
          </ContentWrapper>
          <ContentWrapper>
            <ParkingHistoryItem>
              <div>
                <p>01/02/2017 9:00 AM</p>
                <p>ASD Square, Lantai 9, P-35</p>
              </div>
              <div>
                <h3>Rp.6000,00</h3>
              </div>
            </ParkingHistoryItem>
            <Border />
             <ParkingHistoryItem>
              <div>
                <p>01/02/2017 9:00 AM</p>
                <p>ASD Square, Lantai 9, P-35</p>
              </div>
              <div>
                <h3>Rp.6000,00</h3>
              </div>
            </ParkingHistoryItem>
            <Border />
            <ParkingHistoryItem>
              <div>
                <p>01/02/2017 9:00 AM</p>
                <p>ASD Square, Lantai 9, P-35</p>
              </div>
              <div>
                <h3>Rp.6000,00</h3>
              </div>
            </ParkingHistoryItem>
            <Border />
             <ParkingHistoryItem>
              <div>
                <p>01/02/2017 9:00 AM</p>
                <p>ASD Square, Lantai 9, P-35</p>
              </div>
              <div>
                <h3>Rp.6000,00</h3>
              </div>
            </ParkingHistoryItem>
            <Border />
             <ParkingHistoryItem>
              <div>
                <p>01/02/2017 9:00 AM</p>
                <p>ASD Square, Lantai 9, P-35</p>
              </div>
              <div>
                <h3>Rp.6000,00</h3>
              </div>
            </ParkingHistoryItem>
          </ContentWrapper>
          <ContentWrapper className="center">
            <h3>Total: Rp27.000,00</h3>
          </ContentWrapper>
        </AppContainer>
        <BottomNavigationBar navigationItems={navigationItems}/>
      </div>
    );
  }
}

ParkingHistory.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ParkingHistory: makeSelectParkingHistory(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingHistory);
