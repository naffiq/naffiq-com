import * as React from "react";

import Container, { ContainerContent } from "../components/Container";
import DefaultLayout from "../layouts";
import { LineThrough, Paragraph } from "../components/Typography";
import Link, { A } from "../components/Link";

const AboutPage = () => (
  <DefaultLayout>
    <Container narrow>
      <ContainerContent>
        <h1>Hello!</h1>
        <Paragraph>
          My name is Galymzhan Abdugalimov and I work as a Lead Cloud Engineer @{" "}
          <A href="https://klika-tech.com" target="_blank">
            Klika-Tech Inc
          </A>{" "}
          where we make Internet of Things happen.
        </Paragraph>
        <Paragraph>
          I tried myself as a Project Manager, which helped me a lot to grow as a professional, but in the end
          I still used to code in my spare time because coding is my passion.
        </Paragraph>
        <Paragraph>
          Even this website is a little pet project of mine and I designed with
          Sketch and crafted with JavaScript it from scratch.
        </Paragraph>
        <Paragraph>
          I play and compose some music in my spare time and I hope to update
          the website soon to start putting it here as well.
        </Paragraph>
      </ContainerContent>
    </Container>
  </DefaultLayout>
);

export default AboutPage;
