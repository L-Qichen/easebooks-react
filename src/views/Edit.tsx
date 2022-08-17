import { useTags } from "hooks/useTags";
import React from "react";
import { useParams } from 'react-router-dom';

type Params = {
  id: string;
}

function Edit() {
  const { findTag } = useTags();
  let { id } = useParams<Params>();
  const tag = findTag(parseInt(id || ''));
  return (
    <div>
      {tag.name}
    </div>
  )
};

export default Edit;