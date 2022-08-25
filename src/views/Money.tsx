import React, { useState } from "react";
import Layout from "components/layout";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import { NotesSection } from "./Money/NotesSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { TagsSection } from "./Money/TagsSection";
import { useRecords } from "hooks/useRecords";

function Money() {
  const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
  `
  type Category = '-' | '+';

  const defaultData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: '0'
  };

  const [selected, setSelected] = useState(defaultData);

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  const { addRecord } = useRecords();

  const submit = () => {
    if (addRecord(selected)) {
      alert('Save successfully!');
      setSelected(defaultData);
    };
  }

  return (
    <MyLayout>
      <CategorySection value={selected.category}
        onChange={category => { onChange({ category }) }}
      />

      <TagsSection value={selected.tagIds}
        onChange={tagIds => onChange({ tagIds })}
      />

      <NotesSection value={selected.note}
        onChange={note => { onChange({ note }) }}
      />

      < NumberPadSection value={selected.amount}
        onChange={amount => { onChange({ amount }) }}
        onOk={(submit)}
      />
    </MyLayout>
  );
}

export default Money;