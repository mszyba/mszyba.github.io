import React from 'react';
import '@sap-ui/common-css/dist/sap-content-paddings.css';
import '@sap-ui/common-css/dist/common-css.css';
import {
  Breadcrumbs, BreadcrumbsItem, DynamicPage,
  DynamicPageHeader, DynamicPageTitle, Form,
  FormItem, Label, Link, ObjectPageSection, ObjectPageSubSection,
  Text, Title, Toolbar, ToolbarButton
} from '@ui5/webcomponents-react';
import "@ui5/webcomponents-base/dist/features/F6Navigation.js"
import "@ui5/webcomponents-icons/dist/action.js";
import "@ui5/webcomponents-icons/dist/full-screen.js";
import "@ui5/webcomponents-icons/dist/exit-full-screen.js";
import "@ui5/webcomponents-icons/dist/decline.js";
import { useNavigate } from "react-router-dom";
import { PathConstantsHash } from "../constants/PathConstants";

export default function Personal() {

  return (
    <>
      <DynamicPage
        headerArea={
          <DynamicPageHeader>
            <Form
              headerText="Contact"
              labelSpan="S1 M1 L1 XL1"
              layout="S1 M1 L1 XL1"
            >
              <FormItem labelContent={<Label showColon>E-mail</Label>}>
                <Link href="mailto:anembok@anembok.eu">anembok@anembok.eu</Link>
              </FormItem>
              <FormItem labelContent={<Label showColon>www</Label>}>
                <Link href="https://dev.anembok.eu">https://dev.anembok.eu</Link>
              </FormItem>
              <FormItem labelContent={<Label showColon>LinkedIn</Label>}>
                <Link href="https://www.linkedin.com/in/michal-szyba/">
                  https://linkedin.com/in/michal-szyba</Link>
              </FormItem>
              <FormItem labelContent={<Label showColon>City</Label>}>
                <Label>Wrocław, Poland</Label>
              </FormItem>
            </Form>
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
                <BreadcrumbsItem href={PathConstantsHash.HOME}>Home</BreadcrumbsItem>
                <BreadcrumbsItem>Personal Page</BreadcrumbsItem>
              </Breadcrumbs>
            }
            heading={
              <Title style={{fontSize: 'var(--sapObjectHeader_Title_FontSize)'}}>
                Michał Szyba
              </Title>
            }
            subheading={
              <>
                <Label>ABAP Developer</Label>
                {/*<MessageStrip>Information (only visible if header content is expanded)</MessageStrip>*/}
              </>
            }
            snappedHeading={
              <Title style={{fontSize: 'var(--sapObjectHeader_Title_SnappedFontSize)'}}>
                Michał Szyba
              </Title>
            }
            snappedSubheading={
              <>
                <Label>ABAP Developer</Label>
                {/*<MessageStrip>Information (only visible if header content is collapsed (snapped))</MessageStrip>*/}
              </>
            }
          >
          </DynamicPageTitle>
        }
      >
        <ObjectPageSection
          id="goals"
          titleText="Job experience"
        >
          <Form
            labelSpan="S12 M12 L12 XL12"
            layout="S1 M1 L1 XL1"
          >
            <FormItem labelContent={<Label showColon>ABAP Developer</Label>}>
              <Text>
                ABAP Object-Oriented Design,
                ABAP Programing,
                ABAP Objects,
                ABAP cloud programming,
                Classical User Interfaces,
                Enhancements And Modifications,
                Data Types and Data Objects,
                RESTful ABAP programming model
              </Text>
            </FormItem>
          </Form>
        </ObjectPageSection>

        <ObjectPageSection
          aria-label="Employment"
          id="employment"
          titleText="Employment"
        >
          <ObjectPageSubSection
            aria-label="Certification"
            id="Certification"
            titleText="Certification"
          >
            <Form
              labelSpan="S1 M2 L2 XL2"
              layout="S1 M1 L1 XL1"
            >
              <FormItem labelContent={<Label showColon>Mar, 2024</Label>}>
                <Link href="https://www.credly.com/badges/1adff637-17d7-4c73-886b-87074ccdefd9">
                  SAP Certified Associate - Back-End Developer ABAP Cloud (C_ABAPD_2309)</Link>
              </FormItem>
              <FormItem labelContent={<Label showColon>Mar, 2024</Label>}>
                <Link href="https://www.credly.com/badges/90ec2974-729d-4981-aa59-4ff2ef5ac667">
                  SAP Certified Development Specialist - ABAP for SAP HANA 2.0 (E_HANAAW_18)</Link>
              </FormItem>
              <FormItem labelContent={<Label showColon>May, 2023</Label>}>
                <Text>
                  <Link href="https://www.credly.com/badges/687e4200-e7cd-4fa1-8f6a-adfdf39e2fb4/public_url">
                    SAP Certified Development Associate - ABAP with SAP NetWeaver 7.50 (C_TAW12_750)</Link>
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Nov, 2022</Label>}>
                <Text>
                  <Link
                    href="http://scr.istqb.org/?name=Szyba&number=19075%2FCTFL%2F2022&orderBy=relevancy&orderDirection=&dateStart=&dateEnd=&expiryStart=&expiryEnd=&certificationBody=&examProvider=&certificationLevel=&country=">
                    ISTQB® Certified Tester Foundation Level</Link>
                </Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection
            aria-label="Employee Details"
            id="employment-employee-details"
            titleText="Employee Details"
          >
            <Form
              labelSpan="S1 M2 L2 XL2"
              layout="S1 M1 L1 XL1"
            >
              <FormItem labelContent={<Label showColon>Apr, 2024 - present</Label>}>
                <Text>
                  ABAP Developer
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Apr, 2022 - Apr, 2024</Label>}>
                <Text>
                  Junior ABAP Developer
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Sep, 2019 - Mar, 2022</Label>}>
                <Text>
                  SAP Key User on Warehouse
                </Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Sep, 2011 - Mar, 2022</Label>}>
                <Text>
                  Warehouse Team Lead
                </Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
      </DynamicPage>
    </>
  );
}
