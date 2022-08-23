import React, { useState } from "react";
import Layout from "components/layout";
import { CategorySection } from "./Money/CategorySection";
import { useRecords } from "hooks/useRecords";
import day from 'dayjs'
import styled from "styled-components";
import { useTags } from "hooks/useTags";

function Records() {
  const Item = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    font-size: 18px;
    line-height: 20px;
    padding: 10px 16px;
    > .tags span {
      padding-right: 6px;
    }
    > .note {
      margin-right: auto;
      margin-left: 10px;
      color: #aaa;
    }
  `;
  const [category, setCategory] = useState<'-' | '+'>('-');
  const { records } = useRecords();
  const { getName } = useTags();
  return (
    <Layout>
      <CategorySection value={category}
        onChange={value => { setCategory(value) }}
      />
      <div>
        {records.map(record => {
          return (
            <Item>
              <>
                <div className="tags">
                  {record.tagIds.map(tagId => {
                    return <span>{getName(tagId)}</span>
                  })}
                </div>
              </>
              {record.note && <div className="note">
                {record.note}
              </div>}
              <div className="amount">
                ${record.amount}
              </div>
              {/* {day(record.createdAt).format('YYYY-MM-DD')} */}
            </Item>);
        })}
      </div>
    </Layout >
  );
}

export default Records;