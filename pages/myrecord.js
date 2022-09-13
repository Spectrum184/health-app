import React from 'react';
import MyRecordContainer from '~/containers/MyRecord/MyRecordContainer';
import Head from 'next/head';

const myRecord = () => {
  return (
    <>
      <Head>
        <title>Health App</title>
        {/* <meta name='anhtu' content='Health App For You' />
        <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <MyRecordContainer />
    </>
  );
};

export default myRecord;
