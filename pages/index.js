import Head from 'next/head';
import HomeContainer from '~/containers/HomeContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Health App</title>
        <meta name='description' content='Thanh dep trai vcl' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeContainer />
    </>
  );
}
