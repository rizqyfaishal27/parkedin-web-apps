/*
 *
 * Profile
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectProfile from './selectors';
import styled from 'styled-components';
import TitleBar from 'components/TitleBar';
import BottomNavigationBar from 'components/BottomNavigationBar';
import makeSelectGlobal from 'global-selectors';


import LoaderIcon from 'assets/loader.svg';
import BalanceIcon from 'assets/balance_icon.svg';
import GiftIcon from 'assets/gift_icon.svg';
import CreateIcon from 'assets/create_icon.svg';
import PaperIcon from 'assets/paper_icon.svg';
import InfoOutlineIcon from 'assets/info_outline_icon.svg';

import { push, goBack } from 'react-router-redux';
import { fetchLogin, logout } from 'global-actions';

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
  align-items: ${props => props.center ? 'center' : 'space-around'};
  flex-wrap: wrap;
`

const ContentWrapper = styled.div`
  background-color: #ffffff;
  margin: 0.5rem;
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
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
    flex-direction: column;
    align-items: flex-start;
  }

  & > .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

const StyledLink = styled.a`
  color: ${props => props.red ? 'red' : '#8acbfc'};
  text-decoration: none;
  padding: 0.5rem;
  & > img {
    margin: 0 0.5rem 0 -0.5rem;
  }
`;

const Border = styled.div`
  height: 2px;
  border-top: 1px solid lightgrey;
  width: 100%;
`

export class Profile extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  componentWillMount() {
    const { Global, dispatch } = this.props;
    if(!Global.isLoggedIn) {
      dispatch(push('/'))
    } else {
      if(!Global.userLoaded) {
        dispatch(fetchLogin());
      }
    }
  }

  onLogoutClick() {
    const { dispatch } = this.props;
    dispatch(logout());
  }

  render() {
    const { Global, dispatch } = this.props;
    const user = Global.user;
    

    const navigationItems = [
      {
        icon: PersonIcon,
        iconActive: PersonIconActive,
        isActive: true,
        onClick:  () => { dispatch(push('/profile')) }
      },
      {
        icon: PinIcon,
        iconActive: PinIconActive,
        onClick:  () => { dispatch(push('/building-map')) }
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

    const convertToRupiah = (angka) =>
    {
      let rupiah = '';    
      let angkarev = angka.toString().split('').reverse().join('');
      for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
      return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    }
    if (Global.isSending) {
      return (
        <AppContainer center>
          <div>
            <img src={LoaderIcon} role="presentation" />
          </div>
        </AppContainer>
      )
    }
    return (
      <div>
        <TitleBar title="Profile" back={true} help={true} onBackIconClick={() => { dispatch(goBack())} }/>
        <AppContainer>
          <ContentWrapper>
            <div className="start">
              <h4>{user.fullName}</h4>
              <p>{user.email}</p>
              <p>{user.phoneNumber}</p>
            </div>
            <div className="end">
              <StyledLink href="#">Edit</StyledLink>
            </div>
          </ContentWrapper>
          <ContentWrapper>
            <div className="start">
              <h4>Balance</h4>
            </div>
            <div className="end">
              <h4>{convertToRupiah(user.totalCurrentBalance)}</h4>
              <StyledLink>
                <img src={BalanceIcon} role="presentation" height="16px" />
                Top Up Balance
              </StyledLink>
            </div>
          </ContentWrapper>
          <ContentWrapper>
            <div className="start">
              <h4>Points</h4>
            </div>
            <div className="end">
              <h4>{user.totalCurrentPoints} points</h4>
              <StyledLink>
                <img src={GiftIcon} role="presentation" height="16px" />
                Redeem My Points
              </StyledLink>
            </div>
          </ContentWrapper>
          <ContentWrapper>
            <div className="start">
              <StyledLink>
                <img src={CreateIcon} role="presentation" height="16px" />
                Change Password  
              </StyledLink>
              <Border />
              <StyledLink>
                <img src={PaperIcon} role="presentation" height="16px" />
                Term and Condition 
              </StyledLink>
              <Border />
              <StyledLink>
                <img src={InfoOutlineIcon} role="presentation" height="16px" />
                About Parkedin 
              </StyledLink>
            </div>
          </ContentWrapper>
          <ContentWrapper>
            <div className="center">
              <StyledLink red onClick={this.onLogoutClick}>
                <h4>Logout</h4>
              </StyledLink>
            </div>
          </ContentWrapper>
        </AppContainer>
        <BottomNavigationBar navigationItems={navigationItems}></BottomNavigationBar>
      </div>
    );
  }
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Profile: makeSelectProfile(),
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
