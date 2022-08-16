import { useState } from "react";

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['Food', 'Clothing', 'Housing', 'transportation']);
  return { tags, setTags };
};

export { useTags }