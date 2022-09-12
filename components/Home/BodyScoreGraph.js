import LineChart from '../LineChart';
import React from 'react';
import { bodyScoreChart } from '~/mocks';

const BodyScoreGraph = () => {
  return (
    <div className='h-[316px] w-full md:w-3/5 flex bg-ha-dark-600 p-5 content-center justify-center'>
      <LineChart data={bodyScoreChart} />
    </div>
  );
};

export default BodyScoreGraph;
