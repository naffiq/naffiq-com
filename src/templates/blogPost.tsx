import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";

import Container, { ContainerContent } from "../components/Container";
import DefaultLayout from "../layouts";
import { Heading1 } from "../components/Typography";

export default function BlogPostTemplate({data}: any) {
  const { markdownRemark: post } = data;
  return (
    <DefaultLayout>
      <Helmet title={`Galymzhan Abdugalimov - ${post.frontmatter.title}`} />
      <Container narrow>
        <ContainerContent>
          <Heading1>{ post.frontmatter.title }</Heading1>
          
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        </ContainerContent>
      </Container>
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
