import { useTags } from "hooks/useTags";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TagsSec = styled.section`
    flex-grow: 1;
    background: #FFFFFF;
    padding: 16px;
    > ol {
      margin: 0px -12px;
      > li {
        background: #D9D9D9;
        border-radius: 18px;
        display: inline-block;
        padding: 3px 18px;
        margin: 8px 12px;
        &.selected {
          background:#f60;
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
  `;

type Props = {
  value: number[]
  onChange: (selected: number[]) => void;
};

const TagsSection: React.FC<Props> = (props) => {
  const { tags, addTag } = useTags();
  const selectedTagIds = props.value;

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
      <button onClick={addTag}>add new tag</button>
      <Link to={'/tags'}>
        <span>edit tags</span>
      </Link>
    </TagsSec>
  );
}

export { TagsSection }