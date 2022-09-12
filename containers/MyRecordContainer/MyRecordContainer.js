import React from 'react';
import ButtonSeeMore from '~/components/ButtonSeeMore';
import Layout from '~/components/Layout';
import BodyRecordChart from '~/components/MyRecord/BodyRecordChart';
import MenuRecord from '~/components/MyRecord/MenuRecord';
import { menuMyRecordData } from '~/mocks';

const MyRecordContainer = () => {
  return (
    <Layout>
      <div className='md:px-40 px-2 w-full my-14'>
        <div className='mb-14 flex md:justify-between justify-center flex-wrap items-center'>
          {menuMyRecordData.map((item, index) => (
            <MenuRecord key={index} {...item} />
          ))}
        </div>
        <BodyRecordChart />

        <div className='flex justify-center'>
          <ButtonSeeMore name='記録をもっと見る' />
        </div>
      </div>
    </Layout>
  );
};

export default MyRecordContainer;
