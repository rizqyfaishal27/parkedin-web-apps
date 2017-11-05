/*
 *
 * Tap
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectTap from './selectors';
import styled from 'styled-components';
import TitleBar from 'components/TitleBar';
import BottomNavigationBar from 'components/BottomNavigationBar';
import { Button } from 'semantic-ui-react';
import QRCode from 'assets/qr.png';

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
  padding-top: 2rem;
  & > div {
    padding: 1rem;
    & > p {
      text-align: center;
    }
  }
`
const QRCodeWrapper = styled.div`
  margin: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > div {
    border-radius: 50%;
    padding: 2rem;
    background-color: light-gray;
    border: 2px dashed grey;
  }
`;

export class Tap extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    return (
      <div>
        <TitleBar back={true} help={true} title="EDC Tap" onBackIconClick={() => { dispatch(goBack())} } />
        <AppContainer>
          <QRCodeWrapper>
            <div>
              <img src={QRCode} role="presentation" height="200px" />
            </div>
          </QRCodeWrapper>
          <div>
            <p>Tap your handphone to EDC Machine in the entrace</p>
            <p>------- or -------</p>            
          </div>
          <Button primary onClick={() => { dispatch(push('/pin-code'))} }>Enter PIN</Button>
        </AppContainer>
        <BottomNavigationBar navigationItems={navigationItems}/>
      </div>
    );
  }
}

Tap.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Tap: makeSelectTap(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tap);
