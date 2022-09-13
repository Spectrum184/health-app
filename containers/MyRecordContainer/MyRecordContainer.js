import React from 'react';
import ButtonSeeMore from '~/components/ButtonSeeMore';
import Layout from '~/components/Layout';
import BodyRecordChart from '~/components/MyRecord/BodyRecordChart';
import MenuRecord from '~/components/MyRecord/MenuRecord';
import { dairyData, menuMyRecordData } from '~/mocks';
import ExerciseStatistic from '~/components/MyRecord/ExerciseStatistic';
import DairyCard from '~/components/MyRecord/DairyCard';

const MyRecordContainer = () => {
  return (
    <Layout>
      <div className='md:px-40 px-2 w-full my-14'>
        <div className='mb-14 flex xl:justify-between justify-center flex-wrap items-center'>
          {menuMyRecordData.map((item, index) => (
            <MenuRecord key={index} {...item} />
          ))}
        </div>
        <BodyRecordChart />
        <ExerciseStatistic />
        <div className='mt-14 mb-[30px]'>
          <h3 className='text-2xl text-ha-dark-500'>MY DIARY</h3>
          <div className='grid xl:grid-cols-4 gap-3 grid-cols-2'>
            {dairyData.map((item, index) => (
              <DairyCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className='flex justify-center'>
          <ButtonSeeMore name='記録をもっと見る' />
        </div>
      </div>
    </Layout>
  );
};

export default MyRecordContainer;
