import React from 'react';
import Layout from '~/components/Layout';
import ButtonSeeMore from '~/components/ButtonSeeMore';
import { recommendButtonData, recommendData } from '~/mocks';
import RecommedPhoto from '~/components/Recommend/RecommedPhoto';
import RecommendButton from '~/components/Recommend/RecommendButton';

const RecommendContainer = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center w-full sm:px-40'>
        <div className=' self-center flex  lg:w-[960px] mt-14 flex-wrap justify-between mb-14 '>
          {recommendButtonData.map((item, index) => (
            <RecommendButton {...item} key={index} />
          ))}
        </div>
        <div className=' self-center grid grid-cols-2 md:grid-cols-4 gap-2'>
          {recommendData.map((item, index) => (
            <RecommedPhoto key={index} {...item} />
          ))}
        </div>
        <div className=' self-center mb-16'>
          <ButtonSeeMore name='コラムをもっと見る' />
        </div>
      </div>
    </Layout>
  );
};

export default RecommendContainer;
