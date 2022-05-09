import React from "react";
import Layout from "components/layout";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import { NotesSection } from "./Money/NotesSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { TagsSection } from "./Money/TagsSection";

function Money() {
  const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
  `

  return (
    <MyLayout>
      <TagsSection />

      <NotesSection />

      <CategorySection />

      <NumberPadSection />
    </MyLayout>
  );
}

export default Money;