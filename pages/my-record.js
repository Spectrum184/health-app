import Head from 'next/head';
import MyRecordContainer from '~/containers/MyRecordContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Health App | My Record</title>
        <meta name='description' content='Thanh dep trai vcl' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MyRecordContainer />
    </>
  );
}
