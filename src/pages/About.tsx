import React from 'react';
import {
  Card,
  Icon,
  CardHeader,
  FlexBox,
  Text,
  List, ListItemStandard, ShellBar, Avatar, Input, ShellBarItem
} from '@ui5/webcomponents-react';
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";

const dataset = [
  {
    month: "January",
    data: 65,
  },
  {
    month: "February",
    data: 59,
  },
  {
    month: "March",
    data: 80,
  },
  {
    month: "April",
    data: 81,
  },
  {
    month: "May",
    data: 56,
  },
  {
    month: "June",
    data: 55,
  },
  {
    month: "July",
    data: 40,
  },
];

const tableData = new Array(500).fill(null).map((_, index) => {
  return {
    name: `name${index}`,
    age: Math.floor(Math.random() * 100),
    friend: {
      name: `friend.Name${index}`,
      age: Math.floor(Math.random() * 100),
    },
  };
});

const tableColumns = [
  {
    Header: "Name",
    accessor: "name", // String-based value accessors!
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Friend Name",
    accessor: "friend.name",
  },
  {
    Header: "Friend Age",
    accessor: "friend.age",
  },
];


export default function About() {

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
              titleText="TeamSpace"/>}
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

        <Card
          className={"sap-margin-small"}
          header={
            <CardHeader
              titleText="Stock Prices"
              subtitleText={`Click here to switch to`}
              interactive

              avatar={
                <Icon

                />
              }
            />
          }
          // style={{ width: "300px", padding: ".sap-padding-x-large" }}
          style={{ width: "300px" }}
        >
          <Text>"jhjhjhjhjh"</Text>
        </Card>
        <Card
          className={"sap-margin-small"}
          header={
            <CardHeader
              titleText="Progress"
              subtitleText="List"
              avatar={<Icon name={listIcon} />}
            />
          }
          style={{ width: "300px" }}
        >

        </Card>
        <Card
          className={"sap-margin-small"}
          header={
            <CardHeader
              titleText="AnalyticalTable"
              avatar={<Icon name={tableViewIcon} />}
            />
          }
          style={{ maxWidth: "900px" }}
        >
        </Card>
      </FlexBox>

    </div>
  );
}

