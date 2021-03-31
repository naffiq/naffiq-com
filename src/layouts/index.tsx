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
              "Hi! My name is Galymzhan, I'm software developer from Kazakhstan, living in Almaty, Kazakhstan."
          },
          {
            name: "keywords",
            content:
              "software developer, full-stack, frontend, backend, javascript, typescript, react, nodejs"
          }
        ]}
      >
        <link rel="preconnect" href="https://fonts.gstatic.com"/> 
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Open+Sans:wght@400;700;800&display=swap" rel="stylesheet"/>
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <AppHeader />
      {children}
    </AppLayout>
  );
};

export default DefaultLayout;
