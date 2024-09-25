import React from 'react';
import { Card, CardHeader, FlexBox, Icon, List, ListItemStandard } from "@ui5/webcomponents-react";


export default function Contact() {

  return (
<div>
  <FlexBox
    className="sap-margin-large"
    alignItems="Center"
    direction="Row"
    justifyContent="Center"
    wrap="Wrap"
  >
    <Card
      className={"sap-margin-small"}
      header={
        <CardHeader
          additionalText="3 of 5"
          avatar={<Icon name="person-placeholder" />}
          subtitleText="Direct Reports"
          titleText="Contact"/>}
      style={{ width: "300px" }}
    >
      <List>
        <ListItemStandard description="Software Architect">
          Richard Wilson
        </ListItemStandard>
        <ListItemStandard description="Visual Designer">
          Elena Petrova
        </ListItemStandard>
        <ListItemStandard description="Quality Specialist">
          John Miller
        </ListItemStandard>
      </List>
    </Card>

  </FlexBox>
</div>
);
}