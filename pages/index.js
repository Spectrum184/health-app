import Head from 'next/head';
import HomeContainer from '~/containers/HomeContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Health App</title>
        <meta name='anhtu' content='Health App For You' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeContainer />
    </>
  );
}
