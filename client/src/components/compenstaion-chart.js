import React from 'react';
import {
  XYPlot,
  // HorizontalGridLines,
  // VerticalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
} from 'react-vis';
import { GAMINE_DATA } from '../lib/fixtures/restaurant-pay/gamine';
// bucket by 50k

const filterEmployees = (data, filters) => {
  data.filter((employee) => {
    return Boolean(
      filters.reduce((acc, { filter, value }) => {
        return acc && employee[filter] === value;
      }, true)
    );
  });
};

const getBuckets = (data, bucketSize) => {
  const bucketedData = data.reduce((acc, curr) => {
    const bucketValue = bucketSize * 1000;
    const bucketIndex = Math.floor((curr.salary + curr.bonus) / bucketValue);
    const lowerBound = bucketIndex * bucketValue;
    const { count = 0, employees = [] } = acc[lowerBound] || {};
    acc[lowerBound] = { count: count + 1, employees: [...employees, curr] };
    return acc;
  }, {});
  return bucketedData;
};

const transformBucketData = (data) => {
  return Object.keys(data).map((curr) => ({
    ...data[curr],
    x: curr,
    y: data[curr].count,
  }));
};

export const CompensationChart = ({
  filters,
  data,
  bucketValue,
  bucketClickCallback = () => {},
}) => {
  // const filteredEmployees = filterEmployees(data, filters);
  const bucketEmployees = getBuckets(data, bucketValue);
  console.log(bucketEmployees);
  const transformedBucketData = transformBucketData(bucketEmployees);
  console.log(transformedBucketData);
  return (
    <XYPlot width={900} height={300}>
      <VerticalBarSeries
        data={transformedBucketData}
        barWidth={0.1}
        xDomain={[0, 1000000]}
        onValueClick={(datapoint) => {
          console.log(datapoint);
          bucketClickCallback(datapoint);
        }}
      />
      <XAxis xDomain={[0, 1000000]} tickTotal={10} />
      <YAxis />
    </XYPlot>
  );
};
