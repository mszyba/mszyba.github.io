import {
  Breadcrumbs,
  BreadcrumbsItem,
  FlexBox,
  Form,
  FormItem,
  Label,
  Link,
  ObjectPage,
  ObjectPageHeader,
  ObjectPageSection,
  ObjectPageSubSection,
  ObjectPageTitle,
  Text,
  Toolbar
} from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/home.js";
import { useNavigate } from "react-router-dom";
import { PathConstants } from "../constants/PathConstants";

export default function PersonalPage() {

  const navigate = useNavigate();

  return (
    <>
      <ObjectPage
        headerArea={
          <ObjectPageHeader>
            <FlexBox alignItems="Center" wrap="Wrap">
              <FlexBox direction="Column">
                <Link href="mailto:anembok@anembok.eu">anembok@anembok.eu</Link>
                <Link href="https://anembok.eu">anembok.eu</Link>
                <Link href="https://www.linkedin.com/in/michal-szyba/">
                  linkedin.com/in/michal-szyba</Link>
                <Label>Wrocław, Poland</Label>
              </FlexBox>
              <FlexBox direction="Column" style={{padding: '10px'}}>
              </FlexBox>
            </FlexBox>
          </ObjectPageHeader>}
        image="https://avatars.githubusercontent.com/u/29203263?v=4"
        imageShapeCircle
        mode="Default"
        onBeforeNavigate={function _s() {
        }}
        onPinButtonToggle={function _s() {
        }}
        onSelectedSectionChange={function _s() {
        }}
        onToggleHeaderArea={function _s() {
        }}
        selectedSectionId="goals"
        style={{
          height: '100%',
          overflow: 'auto'
        }}
        titleArea={
          <ObjectPageTitle
            actionsBar={
              <Toolbar design="Transparent">
              </Toolbar>
            }
            breadcrumbs={
              <Breadcrumbs
                onItemClick={function (_s) {
                  navigate(PathConstants.DASHBOARD)
                }}
              >
                <BreadcrumbsItem>Home</BreadcrumbsItem>
                <BreadcrumbsItem>Personal Page</BreadcrumbsItem>
              </Breadcrumbs>
            }

            header="Michał Szyba"
            navigationBar={
              <Toolbar design="Transparent">
              </Toolbar>
            }
            subHeader="ABAP Developer">
          </ObjectPageTitle>}
      >
        <ObjectPageSection
          aria-label="Goals"
          id="goals"
          titleText="Goals"
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
            <Form>
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
            <Form>
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
      </ObjectPage>
    </>
  );
}