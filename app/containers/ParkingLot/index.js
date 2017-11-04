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
import ParkingLotMap from 'assets/parking_lot.png';
import swal from 'sweetalert';

import ParkedinIcon from 'assets/logo-new.png';

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
        confirm: "Yes"
      },
    });
  }

  render() {
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
        </AppContainer>
        <BottomNavigationBar />
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
