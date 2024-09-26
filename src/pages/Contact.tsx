import React from 'react';
import { Card, CardHeader, List, ListItemStandard } from "@ui5/webcomponents-react";

export default function Contact() {

  return (

    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className={"sap-flex--align-content-space-around"}>

        <Card className={"sap-padding"}
              header={<CardHeader titleText="Contact"/>}
              style={{width: "300px"}}>
          <List>
            <ListItemStandard description="Software Architect">Richard Wilson</ListItemStandard>
          </List>
        </Card>
        <Card className={"sap-padding"}
              header={<CardHeader titleText="Contact"/>}
              style={{width: "300px"}}>
          <List>
            <ListItemStandard description="Software Architect">Richard Wilson</ListItemStandard>
            <ListItemStandard description="Visual Designer">Elena Petrova</ListItemStandard>
            <ListItemStandard description="Quality Specialist">John Miller</ListItemStandard>
          </List>
        </Card>
        <Card className={"sap-padding"}
              header={<CardHeader titleText="Contact"/>}
              style={{width: "300px"}}>
          <List>
            <ListItemStandard description="Software Architect">Richard Wilson</ListItemStandard>
          </List>
        </Card> <Card className={"sap-padding"}
                      header={<CardHeader titleText="Contact"/>}
                      style={{width: "300px"}}>
        <List>
          <ListItemStandard description="Software Architect">Richard Wilson</ListItemStandard>
        </List>
      </Card>
      </div>
    </div>
  );
}