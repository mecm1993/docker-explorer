import React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
} from 'baseui/header-navigation';

function Nav() {
  return (
    <div className="nav">
      <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left} />
        <StyledNavigationList $align={ALIGN.center} />
        <StyledNavigationList $align={ALIGN.right} />
      </HeaderNavigation>
    </div>
  );
}

export default Nav;
