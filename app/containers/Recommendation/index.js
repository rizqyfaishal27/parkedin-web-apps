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
    return (
      <div>
        <TitleBar back={true} help={true} title="Recommendation" />
        <AppContainer>
          <h4>Nearhest parking lot recommendation</h4>
          <h1>D-5</h1>
          <h4>3rd Floor ABC Plaza</h4>
          <Button primary style={{margin: '1rem'}}>Navigate to D-5</Button>
          <Button danger style={{margin: '1rem'}} color="red">Other Recommendation?</Button>
        </AppContainer>
        <BottomNavigationBar />
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
