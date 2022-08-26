import Icon from "components/icon";
import Layout from "components/layout";
import { useTags } from "hooks/useTags";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
font-size: 18px;
border: none;
padding: 8px 12px;
background: #f60;
border-radius: 4px;
color: white;
`;

const Topbar = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
line-height: 20px;
padding: 14px;
background: white;
margin-bottom: 8px;
`;

const TagList = styled.ol`
font-size: 16px;
background: white;
> li{
  border-bottom: 1px solid #d5d5d9;
  line-height: 20px;
  margin-left: 16px;
  margin-right: 16px;
  > a{
    padding: 12px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
`;

const Space = styled.div`
height: 16px;
`;

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

function Tags() {
  const { tags, addTag } = useTags();
  return (
    <Layout>
      <Topbar>
        <Icon name="" />
        <span>Tag list</span>
        <Icon name="" />
      </Topbar>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={addTag}>add new tag</Button>
      </Center>
    </Layout>
  )
};

export default Tags;