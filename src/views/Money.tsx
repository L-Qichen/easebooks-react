import React from "react";
import Layout from "components/layout";
import styled from "styled-components";

function Money() {
  const TagsSection = styled.section`
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
    font-size: 24px;
    > ul {
      display: flex;
      background: #C4C4C4;
      > li {
        width: 50%;
        text-align: center;
        padding: 16px 0px;
        position: relative;
        &.selected::after {
          content: '';
          display: block;
          height: 4px;
          border-radius: 32px;
          background: #333;
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
        }
      }
    }
  `

  const NumberPadSection = styled.section`
    display: flex;
    flex-direction: column;
    > .output {
      background: white;
      font-size: 36px;
      line-height: 72px;
      text-align: right;
      padding: 0px 16px;
      box-shadow: inset 0px -5px 5px -5px rgba(0,0,0,0.25),
                  inset 0px 5px 5px -5px rgba(0,0,0,0.25);
    }
    > .pad {
      > button {
        font-size: 18px;
        border: none;
        float: left;
        width: 25%;
        height: 64px;
        &.ok {
          float: right;
          height: 128px;
        }
        &.zero {
          width: 50%;
        }
        &:nth-child(1) {
          background: #f2f2f2;
        }
        &:nth-child(2),
        &:nth-child(5) {
          background: #E0E0E0;
        }
        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(9) {
          background: #D3D3D3;
        }
        &:nth-child(4),
        &:nth-child(7),
        &:nth-child(10) {
          background: #C1C1C1;
        }
        &:nth-child(8),
        &:nth-child(11),
        &:nth-child(13) {
          background: #B8B8B8;
        }
        &:nth-child(12) {
          background: #9A9A9A;
        }
        &:nth-child(14) {
          background: #A9A9A9;
        }
      }
    }
  `

  const MyLayout = styled(Layout)`
    border: 1px solid red;
  `

  return (
    <MyLayout>
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
          <li className="selected">Incomes</li>
          <li>Expenses</li>
        </ul>
      </CategorySection>

      <NumberPadSection>
        <div className="output">
          100
        </div>
        <div className="pad clearfix">
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
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;