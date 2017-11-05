/*
 *
 * BuildingMap
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import makeSelectBuildingMap from './selectors';
import TitleBar from 'components/TitleBar';
import BuildingIcon from 'assets/building_icon.png';
import BottomNavigationBar from 'components/BottomNavigationBar';
import PersonIcon from 'assets/person_icon.svg';
import WatchIcon from 'assets/watch_icon.svg';
import PinIcon from 'assets/pin_icon.svg';
import InfoIcon from 'assets/info_icon.svg';
import PersonIconActive from 'assets/person_icon_active.svg';
import WatchIconActive from 'assets/watch_icon_active.svg';
import PinIconActive from 'assets/pin_icon_active.svg';
import InfoIconActive from 'assets/info_icon_active.svg';
import { push, goBack } from 'react-router-redux';


const { compose, withProps, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");


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

export class BuildingMap extends React.Component { // eslint-disable-line react/prefer-stateless-function
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

    const buildings = [
      {
        position: { lat: -6.2170525, lng: 106.8362474},
        totalParkingLots: 12,
        onClick: () => { dispatch(push('/building-info')) }
      },
      {
        position: { lat: -6.2170845, lng: 106.833769},
        totalParkingLots: 23,
        onClick: () => { dispatch(push('/building-info')) }
      },
      {
        position: { lat: -6.2189877, lng: 106.8327135},
        totalParkingLots: 78,
        onClick: () => { dispatch(push('/building-info')) }
      },
      {
        position: { lat: -6.2208435, lng: 106.833486},
        totalParkingLots: 90,
        onClick: () => { dispatch(push('/building-info')) }
      },
      {
        position: { lat: -6.2213022, lng: 106.8351812},
        totalParkingLots: 37,
        onClick: () => { dispatch(push('/building-info')) }
      }
    ];

    const MapWithAMakredInfoWindow = compose(
      withStateHandlers(() => ({
        isOpen: true,
      })),
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap
        zIndex={1}
        defaultZoom={16}
        defaultCenter={{ lat: -6.219271, lng: 106.8343698 }}
      >
        <Marker
          position={{ lat: -6.219271, lng: 106.8343698  }}
        >
          <InfoWindow>
            <p>You here</p>
          </InfoWindow>
        </Marker>
        { buildings.map(building => <Marker
          position={building.position}
          onClick={building.onClick}
          icon={BuildingIcon}
        >
          <InfoWindow>
            <p>{ building.totalParkingLots }</p>
          </InfoWindow>
        </Marker>)}
      </GoogleMap>
    );

    return (
      <div>
        <TitleBar title="Map" back={true} help={true} onBackIconClick={() => { dispatch(goBack())} } />
        <AppContainer>
          <MapWithAMakredInfoWindow
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </AppContainer>
        <BottomNavigationBar navigationItems={navigationItems} />
      </div>
    );
  }
}

BuildingMap.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  BuildingMap: makeSelectBuildingMap(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildingMap);
