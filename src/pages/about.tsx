import * as React from "react";

import Container, { ContainerContent } from "../components/Container";
import DefaultLayout from "../layouts";
import { LineThrough, Paragraph } from "../components/Typography";

const AboutPage = () => (
  <DefaultLayout>
    <Container narrow>
      <ContainerContent>
        <h1>Hello!</h1>
        <Paragraph>
          My name is Galymzhan Abdugalimov and I'm software developer, living
          and working in Haarlem, Netherlands.
        </Paragraph>
        <Paragraph>
          Despite having rich backend development experience, I recently
          switched to React/React Native development. I use TypeScript for
          commercial development,{" "}
          <LineThrough>but use plain ES6 for personal projects</LineThrough> and
          now I use typescript for personal projects as well. Well, it rules 🤘
        </Paragraph>
        <Paragraph>
          In order to keep everything in JS, I started developing backend for my
          apps using NodeJS and GraphQL.
        </Paragraph>
        <Paragraph>
          I play and compose some music in my spare time, but far from
          publishing it.
        </Paragraph>
      </ContainerContent>
    </Container>
  </DefaultLayout>
);

export default AboutPage;
