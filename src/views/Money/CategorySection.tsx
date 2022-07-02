import { useState } from "react";
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
  const categoryMap = { '-': 'Expenses', '+': 'Incomes' };
  type catKeys = keyof typeof categoryMap;
  const [categoryList] = useState<catKeys[]>(['-', '+']);
  const [category, setCategory] = useState('+');

  return (
    <CategorySec>
      <ul>
        {categoryList.map(c =>
          <li key={c} className={category === c ? 'selected' : ''}
            onClick={() => { setCategory(c) }}>
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </CategorySec>
  );
}

export { CategorySection }