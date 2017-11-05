/**
*
* TitleBar
*
*/

import React from 'react';
import styled from 'styled-components';
import BackIcon from 'assets/back_icon.svg';
import HelpIcon from 'assets/help_icon.svg';

const TitleBarWrapper = styled.div`
  z-index: 99;
  background-color: #0e5184;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  top: 0;
`;

const BackIconWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
`;


const HelpIconWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
`;

const TitleTextWrapper = styled.div`
  flex-grow: 9;
  align-self: center;
  & > h1 {
    text-align: center;
    color: #ffffff;
    font-size: 1.2rem;
  }
`;

const TitleBar = ({ title, back, help, onBackIconClick, onHelpIconClick }) =>
  (
    <TitleBarWrapper>
      { back &&
        <BackIconWrapper>
          <button onClick={onBackIconClick}>
            <img src={BackIcon} role="presentation" height="25" />
          </button>
        </BackIconWrapper>
      }
      <TitleTextWrapper>
        <h1>{title}</h1>
      </TitleTextWrapper>
      { help &&
        <HelpIconWrapper>
          <button onClick={onHelpIconClick}>
            <img src={HelpIcon} role="presentation" height="25" />
          </button>
        </HelpIconWrapper>
      }
    </TitleBarWrapper>
  )

TitleBar.propTypes = {

};

export default TitleBar;
