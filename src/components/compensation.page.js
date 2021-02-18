import React from 'react';
import { GAMINE_DATA } from '../lib/fixtures/restaurant-pay/gamine';
import { CompensationChart } from './compenstaion-chart';
import { OrgList } from './org-list';

export const Compensation = () => {
  // const onCSVUpload = () => (e) => {
  //   console.log(e.target.files);
  // };
  const [bucketValue, setBucketValue] = React.useState(50);
  const handleBucketChange = (e) => {
    setBucketValue(e.target.value);
  };
  const [employeeBucket, setEmployeeBucket] = React.useState([]);
  const onBucketSelect = ({ employees }) => {
    setEmployeeBucket(employees);
  };

  return (
    <div>
      <h1>Compenstaion Overview</h1>
      {/* <form>
        <input type="file" id="csv-file" onChange={onCSVUpload} />
      </form> */}
      <div>
        Bucket by (thousand):
        <input value={bucketValue} onChange={handleBucketChange} />
      </div>
      <br />
      <div>
        Filter by (WIP):
        <input />
      </div>
      <br />
      <CompensationChart
        filters={[]}
        data={GAMINE_DATA}
        bucketValue={bucketValue}
        bucketClickCallback={onBucketSelect}
      />
      <OrgList employees={employeeBucket} />
    </div>
  );
};
