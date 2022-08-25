import React, { useState } from "react";
import Layout from "components/layout";
import { MyChart } from "views/MyChart";
import { RecordInfo, useRecords } from "hooks/useRecords";
import day from "dayjs";
import { CategorySection } from "./Money/CategorySection";
import styled from "styled-components";

function Stats() {
  const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
    .chartwrapper{
      flex-grow:1;
      overflow-x: auto;
      padding: 0px 16px;
    }
    .title{
      text-align: center;
      font-size: 24px;
      padding: 16px 0px;
      color: #666;
    }
  `

  const [category, setCategory] = useState<'-' | '+'>('-');
  const { records } = useRecords();
  const selectedRecords = records.filter(record => record.category === category);
  const hash: { [K: string]: { total: number, records: RecordInfo[] } } = {};

  selectedRecords.forEach(record => {
    const key = day(record.createdAt).format('MM/DD');
    const amountNum = parseFloat(record.amount);
    if (!(key in hash)) {
      hash[key] = { total: amountNum, records: [record] }
    } else {
      hash[key].total += amountNum;
      hash[key].records.unshift(record)
    }
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) { return 0 };
    if (a[0] > b[0]) { return -1 };
    if (a[0] < b[0]) { return 1 };
    return 0;
  });

  return (
    <Layout>
      <StatsContainer>
        <CategorySection value={category}
          onChange={value => { setCategory(value) }}
        />
        <div className="title">{category === "-" ? "Expenses " : "Income "}
          of Past 30 Days</div>
        <div className='chartwrapper'>
          <MyChart selectedCategory={category} value={array} />
        </div>
      </StatsContainer>
    </Layout>
  );
}

export default Stats;