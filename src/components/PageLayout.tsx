import { AnimatePresence, motion, Variants } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { SITE_NAME, SITE_URL } from '../config';

type Props = {
  children: JSX.Element | JSX.Element[];
  title?: string;
  description?: string;
};

function PageLayout({ title, description, children }: Props) {
  const { pathname } = useRouter();
  /**
   * SEO tags
   */
  const pageTitle = title ?? SITE_NAME;
  const canonical = `${SITE_URL}${pathname !== '/' ? pathname : ''}`;
  return (
    <>
      <Head>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description ?? ''} />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description ?? ''} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonical} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={description ?? ''} />
        <link rel="canonical" href={canonical} />
        <title>{pageTitle}</title>
      </Head>
      <main className="flex flex-col min-h-screen bg-gradient-to-br from-white to-slate-300">
        {children}
      </main>
    </>
  );
}

export default PageLayout;
