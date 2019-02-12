import * as React from "react";

import Container, { ContainerContent } from "../components/Container";
import DefaultLayout from "../layouts";
import { Paragraph, Heading1 } from "../components/Typography";

const BlogPage = () => (
  <DefaultLayout>
    <Container narrow>
      <ContainerContent>
        <Heading1>Nothing here... yet</Heading1>
        <Paragraph>
          I think I'm nearing the moment, when I'll start writing about tools I
          use and the life I live.
        </Paragraph>
      </ContainerContent>
    </Container>
  </DefaultLayout>
);

export default BlogPage;
