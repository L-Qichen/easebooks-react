import { RecordInfo } from "hooks/useRecords";
import day from "dayjs";


type ArrayByDate = [string, {
  total: number;
  records: RecordInfo[];
}][]

const ChartInfo = (recordsArray: ArrayByDate) => {

  const today = new Date();
  const dateArray = [];
  const amountArray = []
  for (let i = 29; i >= 0; i--) {
    const date = day(today).subtract(i, "day").format("MM/DD");
    const dateCheck = recordsArray.filter(record => record[0] === date)[0];
    if (dateCheck) {
      dateArray.push(date);
      amountArray.push(dateCheck[1].total)
    } else {
      dateArray.push(date);
      amountArray.push(0);
    }
  }

  return {
    grid: {
      left: 40,
      top: 20,
      right: 5,
      bottom: 40
    },
    xAxis: {
      type: 'category',
      data: dateArray,
      axisTick: {
        alignWithLabel: true
      },
      offset: 15
    },
    yAxis: {
      type: 'value',
      scale: "true",
      axisLabel: {
        formatter: function (value: number, index: number) {
          return `$${value}`
        }
      }
    },
    tooltip: {
      show: true,
      triggerOn: "click",
      formatter: `{b0}: ${"$"}{c0}`
    },
    color:
      ["#f60"],
    series: [{
      symbolSize: 20,
      data: amountArray,
      type: 'line',
      itemStyle: {
        borderWidth: 2
      },
      lineStyle: {
        width: 4
      },
      areaStyle: {
        color: "#f60",
        opacity: 0.1
      }
    }],
    animationDuration: 1500
  }
}

export { ChartInfo }