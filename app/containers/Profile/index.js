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

import BalanceIcon from 'assets/balance_icon.svg';
import GiftIcon from 'assets/gift_icon.svg';
import CreateIcon from 'assets/create_icon.svg';
import PaperIcon from 'assets/paper_icon.svg';
import InfoIcon from 'assets/info_outline_icon.svg';

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
  render() {
    return (
      <div>
        <TitleBar title="Profile" back={true} help={true} />
        <AppContainer>
          <ContentWrapper>
            <div className="start">
              <h4>Rita Alexander</h4>
              <p>rita@Alexander.com</p>
              <p>085641910348</p>
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
              <h4>Rp. 50.0000,00</h4>
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
              <h4>7000 points</h4>
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
                <img src={InfoIcon} role="presentation" height="16px" />
                About Parkedin 
              </StyledLink>
            </div>
          </ContentWrapper>
          <ContentWrapper>
            <div className="center">
              <StyledLink red>
                <h4>Logout</h4>
              </StyledLink>
            </div>
          </ContentWrapper>
        </AppContainer>
        <BottomNavigationBar></BottomNavigationBar>
      </div>
    );
  }
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
