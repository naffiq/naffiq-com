import * as React from "react";
import { graphql } from "gatsby";

import Container, { ContainerContent } from "../../components/Container";
import DefaultLayout from "../../layouts";
import BlogListItem from "../../components/Blog/BlogListItem";
import BlogHeader from "../../components/Blog/BlogHeader";

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
          <BlogHeader />

          { posts.map(({node}) =>  <BlogListItem 
              path={node.frontmatter.path}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.frontmatter.excerpt}
              key={node.frontmatter.date}
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