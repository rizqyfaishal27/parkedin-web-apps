/**
*
* BottomNavigationBar
*
*/

import React from 'react';
import styled from 'styled-components';
import PersonIcon from 'assets/person_icon.svg';
import WatchIcon from 'assets/watch_icon.svg';
import PinIcon from 'assets/pin_icon.svg';
import InfoIcon from 'assets/info_icon.svg';
import PersonIconActive from 'assets/person_icon_active.svg';
import WatchIconActive from 'assets/watch_icon_active.svg';
import PinIconActive from 'assets/pin_icon_active.svg';
import InfoIconActive from 'assets/info_icon_active.svg';

const navigationItems = [
  {
    icon: PersonIcon,
    iconActive: PersonIconActive,
  },
  {
    icon: PinIcon,
    iconActive: PinIconActive,
  },
  {
    icon: WatchIcon,
    iconActive: WatchIconActive,
  },
  {
    icon: InfoIcon,
    iconActive: InfoIconActive
  }
]

const NavigationWrapper = styled.div`
  background-color: #ffffff;
  border-top: 1px solid lightgrey;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavigationItem = styled.div`
  flex-grow: 1;
  align-self: center;
  & > button {
    width: 100%;
  }
`;


const BottomNavigationBar = () => {
  return (
    <NavigationWrapper>
      {navigationItems.map(navItem =>
        <NavigationItem>
          <button>
            <img src={navItem.icon} role="presentation" />
          </button>
        </NavigationItem>)
      }
    </NavigationWrapper>
  )
}


BottomNavigationBar.propTypes = {

};

export default BottomNavigationBar;
