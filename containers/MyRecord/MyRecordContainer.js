import MyDiaryCard from './MyDiaryCard';
import React from 'react';
import Layout from '~/components/Layout';
import ButtonSeeMore from '~/components/ButtonSeeMore';
import { myDiaryData, myRecordButtonData } from '~/mocks';
import MyRecordButton from '~/components/MyRecord/MyRecordButton';
import BodyScoreGraph from '~/components/Home/BodyScoreGraph';
import MyExercise from '~/components/MyRecord/MyExercise';

const MyRecordContainer = () => {
  return (
    <Layout>
      <div className='flex flex-wrap justify-center xl:px-40 px-1 mb-16'>
        <div className=' self-center w-[960px] flex flex-wrap justify-between text-center '>
          {myRecordButtonData.map((item, index) => (
            <MyRecordButton key={index} {...item} />
          ))}
        </div>
        <div className='self-center w-full mt-14'>
          <BodyScoreGraph />
        </div>
        <div className=' self-center w-full mt-14 bg-ha-dark-500 px-6 py-4'>
          <MyExercise />
        </div>
        <div className='self-center w-full mt-14 mb-8 bg-none '>
          <h2 className=' text-[22px] font-normal pb-1'>MY DIARY</h2>
          <div className=' w-full h-[474px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gr gap-3 overflow-hidden '>
            {myDiaryData.map((item, index) => (
              <MyDiaryCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className='flex justify-center'>
          <ButtonSeeMore name='コラムをもっと見る' />
        </div>
      </div>
    </Layout>
  );
};

export default MyRecordContainer;