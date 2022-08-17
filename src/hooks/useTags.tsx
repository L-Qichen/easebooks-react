import { createId } from "lib/createId";
import { useState } from "react";

const defaultTags = [
  { id: createId(), name: 'Food' },
  { id: createId(), name: 'Clothing' },
  { id: createId(), name: 'Housing' },
  { id: createId(), name: 'transportation' }

];
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  return { tags, setTags, findTag }
};

export { useTags };