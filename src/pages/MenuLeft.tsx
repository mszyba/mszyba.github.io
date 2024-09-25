import React from 'react';
import { SideNavigation, SideNavigationItem, } from '@ui5/webcomponents-react';
import { PathConstants } from "../constants/PathConstants";
import "@ui5/webcomponents-icons/dist/email.js";

export default function MenuLeft() {

  return (
    <>
      <SideNavigation
        fixedItems={<>
          <SideNavigationItem
            href="https://www.linkedin.com/in/michal-szyba/"
            icon="chain-link" target="_blank"
            text="LinkedIn"/>
        </>}
        onSelectionChange={function _s() {
        }}
      >
        <SideNavigationItem
          icon="home"
          text="Home"
        />
        <SideNavigationItem
          icon="home"
          text="Personal Page"
          href={PathConstants.PERSONAL_PAGE}
        >
        </SideNavigationItem>
        <SideNavigationItem
          icon="email"
          text="Contact TEST"
          href={PathConstants.CONTACT}
        >
        </SideNavigationItem>
      </SideNavigation>
    </>
  );
}