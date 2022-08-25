import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import { ChartInfo } from "./ChartInfo";
import { RecordInfo } from "hooks/useRecords";

type Category = "-" | "+";

type DateArray = [string, {
  total: number;
  records: RecordInfo[];
}][]

type Prop = {
  selectedCategory: Category,
  value: DateArray
}

function MyChart(props: Prop) {
  const chartRef = useRef<any>();
  let myChart: any = null;
  const option = ChartInfo(props.value);
  const width = window.innerWidth * 4.3;
  const height = window.innerHeight * 0.75;

  function renderChart() {
    const chart = echarts.getInstanceByDom(chartRef.current!);
    if (chart) {
      myChart = chart;
    } else {
      myChart = echarts.init(chartRef.current!);
    };
    myChart.setOption(option);
  };

  useEffect(() => {
    renderChart();
    return () => {
      myChart && myChart.dispose();
    };
  });

  return (
    // Echarts 的容易一定要指定 style（width，height），否则图例不会显示在页面上。
    <div style={{ width: `${width}px`, height: `${height}px` }} ref={chartRef} />
  )
}


export { MyChart };