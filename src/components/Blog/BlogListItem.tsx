import * as React from 'react';
import styled from 'styled-components';
import { Link } from '../Link';
import { Heading3, Paragraph } from '../Typography';

export interface BlogListItemProps {
  path: string;
  title: string;
  date: string;
  excerpt?: string;
}

const BlogListItem: React.FunctionComponent<BlogListItemProps> = (props) => {
  const {path, title, date, excerpt} = props;
  return (
    <PostContainer>
      <DateContainer>
        {date && <small>{date}</small>}
      </DateContainer>
      <TitleContainer>
        <Link to={path}>
          <Heading3>
            { title }
          </Heading3>
        </Link>
        <Paragraph>
          { excerpt }
        </Paragraph>
      </TitleContainer>
    </PostContainer>
  );
}

const PostContainer = styled.article`
  display: flex;
  margin-bottom: 32px;

  ${Heading3} {
    margin-top: 4px;
  }
`;
const DateContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 8px 16px 8px 8px;
`;
const TitleContainer = styled.div`
  flex: 5;
`;

export default BlogListItem;