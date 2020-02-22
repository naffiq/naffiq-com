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
          My name is Galymzhan Abdugalimov and I manage IT projects @{" "}
          <A href="https://petrel.ai" target="_blank">
            petrel.ai
          </A>{" "}
          where we make web services and portals for industrial and financial
          companies.
        </Paragraph>
        <Paragraph>
          I used to write code before I realised that I prefer working with
          people rather than machines. But old habbits never go so I create pet
          projects from time to time and <Link to="/">put it here</Link>, on my
          website.
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
