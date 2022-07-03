import { useState } from "react";
import styled from "styled-components";

type Props = {
  value: string[]
  onChange: (selected: string[]) => void;
};
const TagsSection: React.FC<Props> = (props) => {
  const TagsSec = styled.section`
    flex-grow: 1;
    background: #FFFFFF;
    padding: 12px 16px;
    > ol {
      margin: 0px -12px;
      > li {
        background: #D9D9D9;
        border-radius: 18px;
        display: inline-block;
        padding: 3px 18px;
        margin: 8px 12px;
        &.selected {
          background:orange;
        }
      }
    }
    > button {
      background: none;
      border: none;
      padding: 2px 4px;
      border-bottom: 1px solid #333;
      color: #666;
      margin-top: 8px;
    }
  `

  const [tags, setTags] = useState<string[]>(['Food', 'Clothing', 'Housing', 'transportation']);
  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('New tag name: ');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    };
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      props.onChange(selectedTags.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };

  return (
    <TagsSec>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={() => { onToggleTag(tag) }}
            className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}
          >{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>add new tag</button>
    </TagsSec>
  );
}

export { TagsSection }