import { useTags } from "hooks/useTags";
import { createId } from "lib/createId";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  value: number[]
  onChange: (selected: number[]) => void;
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
    > button, span {
      background: none;
      border: none;
      padding: 2px 4px;
      border-bottom: 1px solid #333;
      color: #666;
      margin-top: 8px;
      margin-right: 24px;
      font-size: 16px;
    }
  `

  const { tags, setTags } = useTags();
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('New tag name: ');
    if (tagName !== null) {
      setTags([...tags, { id: createId(), name: tagName }]);
    };
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };

  return (
    <TagsSec>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => { onToggleTag(tag.id) }}
            className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}
          >{tag.name}</li>
        )}
      </ol>
      <button onClick={onAddTag}>add new tag</button>
      <Link to={'/tags'}>
        <span>edit tags</span>
      </Link>
    </TagsSec>
  );
}

export { TagsSection }