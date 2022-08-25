import React, { useState } from "react";
import Layout from "components/layout";
import { MyChart } from "views/MyChart";
import { RecordInfo, useRecords } from "hooks/useRecords";
import day from "dayjs";
import { CategorySection } from "./Money/CategorySection";

function Stats() {
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
      <CategorySection value={category}
        onChange={value => { setCategory(value) }}
      />
      <h2>Stats page</h2>
      <div id='myChart'></div>
      <MyChart selectedCategory={category} value={array} />
    </Layout>
  );
}

export default Stats;