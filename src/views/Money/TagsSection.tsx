import styled from "styled-components";

function TagsSection() {
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
  return (
    <TagsSec>
      <ol>
        <li>Food</li>
        <li>Clothing</li>
        <li>Housing</li>
        <li>transportation</li>
      </ol>
      <button>add new tag</button>
    </TagsSec>
  );
}

export { TagsSection }