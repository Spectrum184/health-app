import SvgIcon from '../SvgIcon';
import React from 'react';

const ExerciseInfo = ({ kcal, job, time }) => {
  return (
    <div className='w-[416px] ml-6 h-12 flex justify-between border-b border-ha-gray-400 mt-2'>
      <div className='w-4 pt-2'>
        <SvgIcon name='dot' />
      </div>
      <div className='flex justify-between flex-1'>
        <div className='flex flex-col'>
          <h4 className='text-white font-light text-sm'>{job}</h4>
          <span className='text-sm text-ha-primary-300 font-normal'>
            {kcal}
          </span>
        </div>
        <span className='text-lg text-ha-primary-300 font-normal'>{time}</span>
      </div>
    </div>
  );
};

export default ExerciseInfo;
