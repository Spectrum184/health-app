import React from 'react';
import Layout from '~/components/Layout';
import ButtonSeeMore from '~/components/ButtonSeeMore';
import { recommendButtonData, recommendData } from '~/mocks';
import RecommedPhoto from '~/components/Recommend/RecommedPhoto';
import RecommendButton from '~/components/Recommend/RecommendButton';

const RecommendContainer = () => {
  return (
    <Layout>
      <div className='w-full xl:px-[160px] md:px-20 px-4 mb-16'>
        <div className='flex justify-center flex-wrap'>
          {recommendButtonData.map((item, index) => (
            <div key={index} className='xl:mx-[16px] md:mx-2 mx-1 mt-6'>
              <RecommendButton {...item} />
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-14 mb-7 mx-40'>
          {recommendData.map((item, index) => (
            <RecommedPhoto key={index} {...item} />
          ))}
        </div>
        <div className='flex justify-center'>
          <ButtonSeeMore name='コラムをもっと見る' />
        </div>
      </div>
    </Layout>
  );
};

export default RecommendContainer;
