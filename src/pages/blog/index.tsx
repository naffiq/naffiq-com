import * as React from "react";
import { graphql } from "gatsby";

import Container, { ContainerContent } from "../../components/Container";
import DefaultLayout from "../../layouts";
import { Heading1 } from "../../components/Typography";
import BlogListItem from "../../components/Blog/BlogListItem";

interface BlogPageProps {
  data: {
    allMarkdownRemark: {
      edges: [{
        node: {
          id: string,
          frontmatter: {
            path: string,
            title: string,
            date: string,
            excerpt: string
          }
        }
      }]
    }
  }
}

const BlogPage = ({data}: BlogPageProps) => {
  const { edges: posts  } = data.allMarkdownRemark;
  return (
    <DefaultLayout>
      <Container narrow>
        <ContainerContent>
          <Heading1>Latest publishings</Heading1>

          { posts.map(({node}) =>  <BlogListItem 
              path={node.frontmatter.path}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.frontmatter.excerpt}
            />
          ) }
        </ContainerContent>
      </Container>
    </DefaultLayout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            excerpt
          }
        }
      }
    }
  }
`