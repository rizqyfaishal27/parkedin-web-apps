/*
 *
 * Recommendation
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectRecommendation from './selectors';
import TitleBar from 'components/TitleBar';
import BottomNavigationBar from 'components/BottomNavigationBar';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
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
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  background-color: #F0F2F2;
  align-items: center;
  padding-top: 2rem;
  & > h1 {
    font-size: 400%;
  }
  & > button {
    margin: 3rem;
  }
  & > div {
    padding: 1rem;
    & > p {
      text-align: center;
    }
  }
`;

export class Recommendation extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        <TitleBar back={true} help={true} title="Recommendation" onBackIconClick={() => { dispatch(goBack())} } />
        <AppContainer>
          <h4>Nearhest parking lot recommendation</h4>
          <h1>D-5</h1>
          <h4>3rd Floor ABC Plaza</h4>
          <Button primary style={{margin: '1rem'}} onClick={() => { dispatch(push('/parking-lot'))}}>Navigate to D-5</Button>
          <Button danger style={{margin: '1rem'}} color="red">Other Recommendation?</Button>
        </AppContainer>
        <BottomNavigationBar navigationItems={navigationItems} />
      </div>
    );
  }
}

Recommendation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Recommendation: makeSelectRecommendation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommendation);
