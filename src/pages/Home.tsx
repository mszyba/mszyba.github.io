import React from 'react';
import {
  Breadcrumbs, BreadcrumbsItem, Button, Card, CardHeader,
  DynamicPage, DynamicPageHeader, DynamicPageTitle, FlexBox,
  Icon, IllustratedMessage, Title, Text
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/person-placeholder.js";
import "@ui5/webcomponents-fiori/dist/illustrations/tnt/Avatar.js";
import { useNavigate } from "react-router-dom";
import { PathConstants } from "../constants/PathConstants";


export default function Home() {

  const navigate = useNavigate();

  function handleClick() {
    navigate(PathConstants.RESUME);
  }

  return (
    <>
      <DynamicPage
        headerPinned
        headerSnapped
        headerArea={
          <DynamicPageHeader>
            <Text> </Text>
          </DynamicPageHeader>
        }
        onPinButtonToggle={function ks() {
        }}
        onTitleToggle={function ks() {
        }}
        style={{
          height: '800px'
        }}
        titleArea={
          <DynamicPageTitle
            // actionsBar={
            //   <Toolbar design="Transparent">
            //     <ToolbarButton design="Emphasized" text="Edit"/>
            //     <ToolbarButton design="Transparent" text="Delete"/>
            //     <ToolbarButton design="Transparent" text="Copy"/>
            //     <ToolbarButton design="Transparent" icon="action"/>
            //   </Toolbar>
            // }
            // navigationBar={
            //   <Toolbar design="Transparent">
            //     <ToolbarButton design="Transparent" icon="full-screen"/>
            //     <ToolbarButton design="Transparent" icon="exit-full-screen"/>
            //     <ToolbarButton design="Transparent" icon="decline"/>
            //   </Toolbar>
            // }
            breadcrumbs={
              <Breadcrumbs>
                <BreadcrumbsItem>Home</BreadcrumbsItem>
              </Breadcrumbs>
            }
            heading={
              <Title style={{fontSize: 'var(--sapObjectHeader_Title_FontSize)'}}>
                Home Page
              </Title>
            }
            // subheading={
            //   <>
            //     <Label>ABAP Developer</Label>
            //     {/*<MessageStrip>Information (only visible if header content is expanded)</MessageStrip>*/}
            //   </>
            // }

            snappedHeading={
              <Title style={{fontSize: 'var(--sapObjectHeader_Title_SnappedFontSize)'}}>
                Home Page
              </Title>
            }
            // snappedSubheading={
            //   <>
            //     <Label>ABAP Developer</Label>
            //     {/*<MessageStrip>Information (only visible if header content is collapsed (snapped))</MessageStrip>*/}
            //   </>
            // }
          >
          </DynamicPageTitle>
        }
      >
        <FlexBox
          alignItems="Start"
          direction="Row"
          justifyContent="SpaceAround"
          wrap="NoWrap"
        >
          <Card
            className={"sap-padding sap-flex--align-content-space-around"}
            header={
              <CardHeader
                titleText="Personal Page"
                avatar={<Icon name="person-placeholder"/>}
                subtitleText="Michał Szyba"
                interactive
              />
            }
            style={{
              width: '300px',
              minHeight: '200px',

            }}
          >
            <IllustratedMessage name="TntAvatar"/>
            <Button
              className={"sap-flex--align-content-center"}
              design="Default"
              icon="employee"
              onClick={handleClick}
            >
              Go to Personal Page
            </Button>
          </Card>

          <Card
            className={"sap-padding sap-flex--align-content-space-around"}
            header={
              <CardHeader
                titleText="Personal Page"
                avatar={<Icon name="person-placeholder"/>}
                subtitleText="Michał Szyba"
                interactive
              />
            }
            style={{
              width: '300px',
              minHeight: '200px',

            }}
          >
            <IllustratedMessage name="TntAvatar"/>
            <Button
              className={"sap-flex--align-content-center"}
              design="Default"
              icon="employee"
              onClick={handleClick}
            >
              Go to Personal Page
            </Button>
          </Card>
        </FlexBox>
      </DynamicPage>
    </>
  );
}
