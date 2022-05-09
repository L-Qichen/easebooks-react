import styled from "styled-components";

function CategorySection() {
  const CategorySec = styled.section`
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
  return (
    <CategorySec>
      <ul>
        <li className="selected">Incomes</li>
        <li>Expenses</li>
      </ul>
    </CategorySec>
  );
}

export { CategorySection }