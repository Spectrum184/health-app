import Head from 'next/head';
import RecommendContainer from '~/containers/RecommendContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Health App</title>
        <meta name='description' content='Recommed For You' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RecommendContainer />
    </>
  );
}
