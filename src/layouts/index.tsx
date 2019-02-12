import * as React from "react";
import Helmet from "react-helmet";

import AppHeader from "./partials/AppHeader";
import styled from "styled-components";

import "./index.css";
interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: any;
}

const AppLayout = styled.div`
  height: 100%;

  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-size: 16px;
`;

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <AppLayout>
      <Helmet
        title="Galymzhan Abdugalimov — Personal website"
        meta={[
          {
            name: "description",
            content:
              "Hi! My name is Galymzhan, I'm software developer from Kazakhstan, living in Haarlem, Netherlands."
          },
          {
            name: "keywords",
            content:
              "software developer, full-stack, frontend, backend, javascript, typescript, react, nodejs"
          }
        ]}
      >
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
      </Helmet>
      <AppHeader />
      {children}
    </AppLayout>
  );
};

export default DefaultLayout;
