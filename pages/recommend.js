import Head from 'next/head';
import RecommendContainer from '~/containers/RecommendContainer';

export default function RecommendPage() {
  return (
    <>
      <Head>
        <title>Health App</title>
      </Head>
      <RecommendContainer />
    </>
  );
}
