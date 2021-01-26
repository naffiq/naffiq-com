import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";

import Container, { ContainerContent } from "../components/Container";
import DefaultLayout from "../layouts";
import { Heading1 } from "../components/Typography";

interface BlogPostTemplateProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        path: string,
        title: string,
        date: string,
        excerpt: string,
        ogImage: string
      }
    }
  }
}

export default function BlogPostTemplate({data}: BlogPostTemplateProps) {
  const { markdownRemark: post } = data;
  return (
    <DefaultLayout>
      <Helmet 
        title={`${post.frontmatter.title}`} 
        meta={[
          {
            name: "description",
            content: post.frontmatter.excerpt
          },
          {
            name: "og:description",
            content: post.frontmatter.excerpt
          },
          {
            name: "og:image",
            content: post.frontmatter.ogImage
          }
        ]}
      />
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
        excerpt
        ogImage
      }
    }
  }
`;
