import Icon from "components/icon";
import Layout from "components/layout";
import { useTags } from "hooks/useTags";
import React, { useRef } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";

type Params = {
  id: string;
}

type Props = {
  value: string;
  onChange: (value: string) => void;
};

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
`;

const InputWrapper = styled.div`
background: white;
padding: 0px 16px;
margin-top: 8px;
`;

const Label = styled.label`
display: flex;
align-items: center;
> span {
  margin-right: 8px;
  white-space: nowrap;
}
> input {
  width: 100%;
  height: 44px;
  border: none;
  background: none;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #333;
}
`;

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Space = styled.div`
height: 16px;
`;

function Edit(props: Props) {
  const { findTag, updateTag, deleteTag } = useTags();
  let { id: idString } = useParams<Params>();
  let tag = findTag(parseInt(idString || ''));
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      updateTag(tag.id, { name: refInput.current.value });
    };
  };

  const onClickBack = () => {
    window.history.back();
  };

  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack} />
        <span>Edit</span>
        <Icon name="" />
      </Topbar>
      {tag ?
        <div>
          <InputWrapper>
            <Label>
              <span>Tag name: </span>
              <input type="text"
                placeholder="Tag name"
                ref={refInput}
                defaultValue={tag.name}
                onBlur={onBlur}
              />
            </Label>
          </InputWrapper>
          <Center>
            <Space />
            <Space />
            <Space />
            <Button onClick={() => deleteTag(tag.id)}>Delete</Button>
          </Center>
        </div> : <Center><Space /><Space /><Space />No Data</Center>
      }
    </Layout>
  )
};

export default Edit;