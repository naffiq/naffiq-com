import * as React from "react"
import styled from 'styled-components'
import { Heading1 } from "../Typography"
import { A } from "../Link"

const BlogHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const RSSLink = styled(A)`
  margin: 4px 0;
  
`

export default function BlogHeader() {

  return (
    <BlogHeaderContainer>
      <Heading1>Latest publishings</Heading1>
      <RSSLink href="/rss.xml" target="blank">RSS feed</RSSLink>
    </BlogHeaderContainer>
  )
  
}