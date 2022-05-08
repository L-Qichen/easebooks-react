import React from "react";
import Layout from "components/layout";
import styled from "styled-components";

function Money() {
  const TagsSection = styled.section`
    background: #FFFFFF;
    border: 1px solid red;
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

  const NotesSection = styled.section`
    padding: 0px 16px;
    > label {
      display: flex;
      align-items: center;
      > span {
        margin-right: 8px;
        white-space: nowrap;
      }
      > input {
        width: 100%;
        height: 72px;
        border: none;
        background: none;
      }
    }
  `

  const CategorySection = styled.section`
    
  `

  const NumberPadSection = styled.section`
  
  `

  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>Food</li>
          <li>Clothing</li>
          <li>Housing</li>
          <li>transportation</li>
        </ol>
        <button>add new tag</button>
      </TagsSection>

      <NotesSection>
        <label>
          <span>
            Comment:
          </span>
          <input type="text" placeholder="Add comments here" />
        </label>
      </NotesSection>

      <CategorySection>
        <ul>
          <div>income</div>
          <div>outcome</div>
        </ul>
      </CategorySection>

      <NumberPadSection>
        <div>
          100
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Del.</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>C</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;