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
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      };
    };
    return result;
  };

  const updateTag = (id: number, obj: { name: string }) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1, { id: id, name: obj.name });
    setTags(tagsClone);
  };

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  return { tags, setTags, findTag, updateTag, findTagIndex, deleteTag }
};

export { useTags };