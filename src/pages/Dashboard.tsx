import React from 'react';
import Personal from "./Personal";

export default function Dashboard() {
  return (
    <>
      <div className="sap-flex--justify-center">
        {/*<div className="sap-margin-small">*/}
        {/*  <MenuLeft/>*/}
        {/*</div>*/}
        <Personal/>
      </div>
    </>
  );
}