/*
 *
 * BuildingInfo
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectBuildingInfo from './selectors';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import TitleBar from 'components/TitleBar';
import BottomNavigationBar from 'components/BottomNavigationBar';
import BuildingImage from 'assets/building.jpg';
import { push, goBack } from 'react-router-redux';
import MoneyIcon from 'assets/money_icon.svg';
import DirectionIcon from 'assets/direction_icon.svg';

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
  flex-direction: row;
  padding: 1.5rem 1rem;
  flex-wrap: wrap;

  &.column {
    flex-direction: column;
  }
  & > div > p {
    margin-top: 0;
  }
  & > * {
    flex-grow: 1;
  }
  & > .end {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  & > .start {
    display: flex;
    flex-direction: row;
    
    & > * {
      flex-grow: 1;
    }

    & > .end-align {
      align-self: flex-end; 
    }
  }


  & > .center {
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column' };
    align-items: center;

    & > button {
      margin-top: 0.5rem;
      width: 100%;
    }

    & > h4 {
      margin: 0.5rem;
    } 
    &.large {
      flex-basis: 100%;
      flex-grow: 2;
    }

    &.padding-top {
      padding-top: 1rem;
    }

    & > div > span {
      font-size: 16px;
      font-weight: 500;
      margin: 0.5rem;
    }
  }

`;

const Border = styled.div`
  height: 2px;
  border-top: 1px solid lightgrey;
  width: 100%;
  margin: 1rem 0;
`


export class BuildingInfo extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        <TitleBar title="Building ABC" help={true} back={true} onBackIconClick={() => { dispatch(goBack())} } />
        <AppContainer>
          <ContentWrapper>
             <div className="center large">
              <h2>108 Parking lot</h2>
            </div>
            <div className="center">
              <img src={BuildingImage} role="presentation" width="80px" />
              
            </div>
            <div className="center padding-top">
              <h4>1st floor - 11 remains</h4>
              <h4>G - 10 remains</h4>
              <h4>UG - 12 remains</h4>
              <h4>B1 - 20 remains</h4>
              <h4>B2 - 21 remains</h4>
              <h4>B3 - 22 remains</h4>
            </div>
          </ContentWrapper>
          <ContentWrapper className="column" row>
            <div className="center">
              <div>
                <img src={MoneyIcon} role="presentation" height="16px" />
                <span>Rp.3000,00 per hour</span>
              </div>
            </div>
            <Border />
            <div className="center">
              <div>
                <img src={DirectionIcon} role="presentation" height="16px" />
                <span>1.10 Km</span>
              </div>
            </div>
            <div className="center large padding-top">
              <Button primary onClick={() => dispatch(push('/tap'))}>Park Here</Button>
            </div>
          </ContentWrapper>
        </AppContainer> 
        <BottomNavigationBar navigationItems={navigationItems} />
      </div>
    );
  }
}

BuildingInfo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  BuildingInfo: makeSelectBuildingInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildingInfo);
