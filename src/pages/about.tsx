import type { NextPage } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

import CenteredContainer from '../components/CenteredContainer';
import LinkText from '../components/LinkText';
import PageLayout from '../components/PageLayout';
import ParagraphText from '../components/ParagraphText';
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from '../config';

const InnerPageHeader = dynamic(() => import('../components/InnerPageHeader'), { ssr: false });

const About: NextPage = () => {
  return (
    <PageLayout
      title="About Me"
      description="I am a full-stack software engineer with experience developing both frontend
      and backend systems."
    >
      <CenteredContainer>
        <div className="mx-5 lg:mx-0">
          <InnerPageHeader backHref="/">About Me</InnerPageHeader>
          <motion.div
            className="lg:max-w-3xl"
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate="show"
          >
            <ParagraphText emphasis>
              I&apos;m a full-stack software engineer with 6 years of experience developing both
              frontend and backend systems.
            </ParagraphText>
            <ParagraphText>
              I&apos;ve worked with a variety of server-side frameworks in both Node.js and Python
              including Express, Koa and Flask, and have extensive experience building data-driven
              UIs in React using Next.js and CRA.
            </ParagraphText>
            <ParagraphText>
              I&apos;ve implemented datastores using PostgreSQL, MySQL and Redis, and built
              distributed message queues around Redis Pub/Sub and RabbitMQ. I&apos;m a huge fan of
              Typescript and Docker, and use both wherever I can.
            </ParagraphText>
            <motion.div variants={ITEM_VARIANTS} className="flex space-x-6 mt-8">
              <LinkText href="https://github.com/bcla22">My Github</LinkText>
              <LinkText href="/contact">Contact Me Directly</LinkText>
            </motion.div>
          </motion.div>
        </div>
      </CenteredContainer>
    </PageLayout>
  );
};

export default About;
