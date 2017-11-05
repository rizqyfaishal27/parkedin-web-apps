/*
 *
 * ParkingLot
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectParkingLot from './selectors';
import styled from 'styled-components';
import TitleBar from 'components/TitleBar';
import BottomNavigationBar from 'components/BottomNavigationBar';
import ParkingLotMap from 'assets/parking_lot.gif';
import swal from 'sweetalert';

import ParkedinIcon from 'assets/logo-new.png';
import { Button } from 'semantic-ui-react';

import { push } from 'react-router-redux';
import PersonIcon from 'assets/person_icon.svg';
import WatchIcon from 'assets/watch_icon.svg';
import PinIcon from 'assets/pin_icon.svg';
import InfoIcon from 'assets/info_icon.svg';
import PersonIconActive from 'assets/person_icon_active.svg';
import WatchIconActive from 'assets/watch_icon_active.svg';
import PinIconActive from 'assets/pin_icon_active.svg';
import InfoIconActive from 'assets/info_icon_active.svg';


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
  align-items: center;
  justify-content: center;
  & > h3 {
    margin: 0.5rem;
  }
`;


export class ParkingLot extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.onHelpButtonIconClick = this.onHelpButtonIconClick.bind(this);
  }

  onHelpButtonIconClick() {
    const content = document.createElement('div');
    const { dispatch } = this.props;
    content.style = 'display: flex; flex-direction: row; flex-wrap: wrap;'
    content.innerHTML = `
      <div>
        <img src="${ParkedinIcon}" role="presentation" height="50px" style="margin: 1rem; "/>
      </div>
      <div>
        <h3 style="text-align: left;">Confirmation</h3>
        <p style="text-align: left;">ABC Plaza, Lantai 4, C-29</p>
        <p style="text-align: left;">You start parking now ?</p>
        <hr>
      </div>
    `;
    swal({
      content: content,
      buttons: {
        cancel: true,
        confirm: {
          text: "Yes"
        }
      }
    })
    .then(action => {
      if (action) {
        dispatch(push('/parking-detail'));
      }
    });
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
        isActive: true,
      },
      {
        icon: WatchIcon,
        iconActive: WatchIconActive,
        onClick: () => { dispatch(push('/parking-history')) },
      },
      {
        icon: InfoIcon,
        iconActive: InfoIconActive,
        onClick: () => {  dispatch(push('/parking-detail')) },
        
      }
    ]
    return (
      <div>
        <TitleBar help={true} back={true} title="Parking Lot" onHelpIconClick={this.onHelpButtonIconClick} />
        <AppContainer>
          <ContentWrapper>
            <img src={ParkingLotMap} role="presentation" />
          </ContentWrapper>
          <ContentWrapper>
            <h3>ABC Plaza - 1st Floor</h3>
            <h3>D-5</h3>
          </ContentWrapper>
          <ContentWrapper>
            <Button primary onClick={this.onHelpButtonIconClick}>
              Park here
            </Button>
          </ContentWrapper>
        </AppContainer>
        <BottomNavigationBar navigationItems={navigationItems} />
      </div>
    );
  }
}

ParkingLot.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ParkingLot: makeSelectParkingLot(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLot);
