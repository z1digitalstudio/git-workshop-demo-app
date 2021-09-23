import type { NextPage } from 'next';
import Head from 'next/head';

import HomeView from '$/containers/Views/Home';
import pageTitle from '$/utils/pageTitle';

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>{pageTitle()}</title>
      <meta name="title" content={pageTitle()} />
    </Head>
    <HomeView />
  </>
);

export default HomePage;
