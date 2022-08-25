import { createId } from "lib/createId";
import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    let initialTags = (JSON.parse(window.localStorage.getItem('tags') || '[]'));
    if (initialTags.length === 0) {
      initialTags = [
        { id: createId(), name: 'Food' },
        { id: createId(), name: 'Shopping' },
        { id: createId(), name: 'Housing' },
        { id: createId(), name: 'Salary' }

      ];
    };
    setTags(initialTags);
  }, []); //useEffect 传入空数组则会且只在首次渲染时调用该钩子 (组件挂载时执行)

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags); // useEffect 钩子必须要不可变数据才能触发，所以每次setTags必须是一个新的

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

  const addTag = () => {
    const tagName = window.prompt('New tag name: ');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, { id: createId(), name: tagName }]);
    };
  };

  const getName = (id: number) => {
    const tag = tags.filter(tag => tag.id === id)[0];
    return tag ? tag.name : '';
  };

  return { tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag, getName };
};

export { useTags };