import React from 'react';
import Layout from '~/components/Layout';
import ButtonSeeMore from '~/components/ButtonSeeMore';
import { recommendButtonData, recommendData } from '~/mocks';
import RecommendPhoto from '~/components/Recommend/RecommendPhoto';
import RecommendButton from '~/components/Recommend/RecommendButton';

const RecommendContainer = () => {
  return (
    <Layout>
      <div className='w-full xl:px-[160px] mb-16 px-4 mt-14'>
        <div className='flex justify-center flex-wrap xl:justify-between'>
          {recommendButtonData.map((item, index) => (
            <RecommendButton {...item} key={index} />
          ))}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-14'>
          {recommendData.map((item, index) => (
            <RecommendPhoto key={index} {...item} />
          ))}
        </div>
        <div className='flex justify-center mt-6'>
          <ButtonSeeMore name='コラムをもっと見る' />
        </div>
      </div>
    </Layout>
  );
};

export default RecommendContainer;
