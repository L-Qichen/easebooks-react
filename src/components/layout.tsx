import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const Layout = (props: any) => {
  const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
  `;

  const ContentBox = styled.div`
  flex-grow: 1;
  overflow: auto;
  `;
  return (
    <Wrapper>
      <ContentBox className={props.className}>
        {props.children}
      </ContentBox>
      <Nav />
    </Wrapper>
  );
}

export default Layout;