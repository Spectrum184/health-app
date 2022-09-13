import React from 'react';
import Layout from '~/components/Layout';
import ButtonSeeMore from '~/components/ButtonSeeMore';
import { myRecordButtonData } from '~/mocks';
import MyRecordButton from '~/components/MyRecord/MyRecordButton';
import BodyScoreGraph from '~/components/Home/BodyScoreGraph';

const MyRecordContainer = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center text-center mx-40 mb-16'>
        <div className=' w-full h-72 mt-14 flex justify-between'>
          {myRecordButtonData.map((item, index) => (
            <MyRecordButton key={index} {...item} />
          ))}
        </div>
        <div className=' w-full h-72 mt-14'>
          <BodyScoreGraph />
        </div>
        <div className=' w-full h-72 mt-14 bg-black'></div>
        <div className=' w-full h-72 mt-14 mb-8 bg-black'></div>
        <div className='flex justify-center'>
          <ButtonSeeMore name='コラムをもっと見る' />
        </div>
      </div>
    </Layout>
  );
};

export default MyRecordContainer;
