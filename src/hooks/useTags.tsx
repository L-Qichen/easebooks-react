import { useState } from "react";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    { id: 1, name: 'Food' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Housing' },
    { id: 4, name: 'transportation' }
  ]);
  return { tags, setTags }
};

export { useTags };