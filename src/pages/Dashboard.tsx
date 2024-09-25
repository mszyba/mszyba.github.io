import React from 'react';
import MenuLeft from "./MenuLeft";
import PersonalPage from "./PersonalPage";

export default function Dashboard() {
  return (
    <>
      <div className="sap-flex--justify-center">
        <div className="sap-margin-small">
          <MenuLeft/>
        </div>
        <PersonalPage/>
      </div>
    </>
  );
}