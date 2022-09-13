import Head from 'next/head';
import HomeContainer from '~/containers/HomeContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Health App | Homepage</title>
        <meta name='description' content='Health App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeContainer />
    </>
  );
}
