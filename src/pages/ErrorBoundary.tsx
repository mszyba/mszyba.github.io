import React from 'react';
import { Button, Card, CardHeader, IllustratedMessage } from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import "@ui5/webcomponents-fiori/dist/illustrations/PageNotFound.js";
import "@ui5/webcomponents-icons/dist/undo.js";
import { PathConstants } from "../constants/PathConstants";

export default function ErrorBoundary() {

  const navigate = useNavigate();

  function handleClick() {
    navigate(PathConstants.DASHBOARD);
  }

  return (
    <div>
      <Card
        className="sap-flex--align-content-center sap-position-absolute-center"
        header={<CardHeader titleText="Błąd 404"/>}
        style={{
          width: '600px',
          minHeight: '600px'
        }}
      >
        <IllustratedMessage name="PageNotFound"/>
        <Button
          className={"sap-flex--align-content-center"}
          design="Default"
          icon="undo"
          onClick={handleClick}
        >
          Return to Homepage
        </Button>
      </Card>
    </div>
  );
}