import ExerciseInfo from './ExerciseInfo';
import React from 'react';
import moment from 'moment/moment';
import { exerciseData } from '~/mocks';

const ExerciseStatistic = () => {
  return (
    <div
      className='bg-ha-dark-500 h-[264px] w-full mt-14 pt-4 overflow-y-auto'
      id='exercise-statistic'
    >
      <div className='flex pl-6 w-full mb-1'>
        <h3 className='text-white font-normal text-base'>
          MY
          <br />
          EXERCISE
        </h3>
        <span className='font-normal text-xl text-white ml-5'>
          {moment(exerciseData.date, 'YYYY-MM-DD').format('YYYY.MM.DD')}
        </span>
      </div>
      <div className='flex flex-wrap xl:justify-between pr-6 justify-center'>
        {exerciseData.data.map((item, index) => (
          <ExerciseInfo {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseStatistic;
