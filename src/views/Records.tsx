import React, { ReactNode, useState } from "react";
import Layout from "components/layout";
import { CategorySection } from "./Money/CategorySection";
import { RecordInfo, useRecords } from "hooks/useRecords";
import day from 'dayjs'
import styled from "styled-components";
import { useTags } from "hooks/useTags";
import "core-js";

function Records() {
  const Item = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    font-size: 18px;
    line-height: 20px;
    padding: 10px 16px;
    > .note {
      margin-right: auto;
      margin-left: 16px;
      color: #aaa;
    }
  `;

  const NoData = styled.div`
    height: 70vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: #666;
    opacity: 0.5;
  `;

  const Header = styled.h3`
    font-size: 18px;
    line-height: 20px;
    padding: 10px 16px;
  `;

  const [category, setCategory] = useState<'-' | '+'>('-');
  const { records } = useRecords();
  const { getName } = useTags();
  const selectedRecords = records.filter(record => record.category === category);
  const hash: { [K: string]: RecordInfo[] } = {};

  selectedRecords.forEach(record => {
    const key = day(record.createdAt).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    };
    hash[key].push(record);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) { return 0 };
    if (a[0] > b[0]) { return -1 };
    if (a[0] < b[0]) { return 1 };
    return 0;
  });

  return (
    <Layout>
      <CategorySection value={category}
        onChange={value => { setCategory(value) }}
      />
      {array.length === 0 ? <NoData>No Data</NoData> :
        <div>
          {array.map(([date, records]) => {
            return (
              <div key={date}>
                <Header>
                  {date}
                </Header>
                <div>
                  {records.map(record => {
                    return (
                      <Item key={record.createdAt}>
                        <div className="tags">
                          {record.tagIds.map(tagId => {
                            return <span key={tagId}>{getName(tagId)}</span>
                          })
                            .reduce((result, span, index, array) =>
                              result.concat(index < array.length - 1 ? [span, ', '] : [span]), [] as ReactNode[])}
                        </div>
                        {record.note && <div className="note">
                          {record.note}
                        </div>}
                        <div className="amount">
                          ${record.amount}
                        </div>
                      </Item>);
                  })}
                </div>
              </div>
            )
          })}
        </div>}

    </Layout >
  );
}

export default Records;