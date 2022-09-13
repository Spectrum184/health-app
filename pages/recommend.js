import Head from 'next/head';
import RecommendContainer from '~/containers/RecommendContainer';

export default function RecommendPage() {
  return (
    <>
      <Head>
        <title>Health App | Recommend Page</title>
        <meta name='description' content='Health App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RecommendContainer />
    </>
  );
}
