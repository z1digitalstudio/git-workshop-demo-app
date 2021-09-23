import type { NextPage } from 'next';
import Head from 'next/head';

import NotFoundView from '$/containers/Views/NotFound';
import pageTitle from '$/utils/pageTitle';

const NotFoundPage: NextPage = () => (
  <>
    <Head>
      <title>{pageTitle('Not Found')}</title>
    </Head>
    <NotFoundView />
  </>
);

export default NotFoundPage;
