import type { NextPage } from 'next';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';

const Error404: NextPage = () => {
  return (
    <PageLayout title="404 Not Found">
      <div className="container flex flex-col align-center items-center my-auto">
        <h1 className="text-4xl font-light text-gray-700 mb-6">
          404 Not Found
        </h1>
        <p className="text-gray-500 mb-12">
          Whatever you&apos;re looking for, its not here...
        </p>
        <Link href="/">
          <a className="text-teal-600 font-medium">
            Back to Home
          </a>
        </Link>
      </div>
    </PageLayout>
  );
};

export default Error404;
