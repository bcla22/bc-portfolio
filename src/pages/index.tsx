import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import canada_flag from '../assets/canada.png';
import CenteredContainer from '../components/CenteredContainer';
import CTAButton from '../components/CTAButton';
import PageLayout from '../components/PageLayout';

const Home: NextPage = () => {
  return (
    <PageLayout title="Ben Clausi - Full-Stack Software Engineer">
      <CenteredContainer>
        <div className="mx-5 lg:mx-0">
          <h1 className="text-6xl lg:text-8xl font-medium mb-6 text-slate-900">Ben Clausi</h1>
          <div className="flex items-center mb-12">
            <p className="text-2xl font-light text-slate-600 mr-4">Full-Stack Software Engineer</p>
            <Image src={canada_flag.src} height={20} width={40} alt="Canadian Flag" />
          </div>
          <div className="space-x-2">
            <Link href="/about">
              <CTAButton>About Me</CTAButton>
            </Link>
            <Link href="/contact">
              <CTAButton>Get In Touch</CTAButton>
            </Link>
          </div>
        </div>
        {/* <Link href="/about">go to about</Link> */}
      </CenteredContainer>
    </PageLayout>
  );
};

export default Home;
