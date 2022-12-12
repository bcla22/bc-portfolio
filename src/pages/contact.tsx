import type { NextPage } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

import CenteredContainer from '../components/CenteredContainer';
import LinkText from '../components/LinkText';
import PageLayout from '../components/PageLayout';
import ParagraphText from '../components/ParagraphText';
import ContactForm from '../components/ContactForm';
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from '../config';

const InnerPageHeader = dynamic(() => import('../components/InnerPageHeader'), { ssr: false });

const Contact: NextPage = () => {
  return (
    <PageLayout title="Get In Touch" description="Get in contact with me using the form below.">
      <CenteredContainer>
        <div className="mx-5 lg:mx-0">
          <InnerPageHeader backHref="/">Get In Touch</InnerPageHeader>
          <motion.div
            className="lg:max-w-3xl"
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate="show"
          >
            <ParagraphText emphasis>
              Looking to get in contact? Send me a message using the form below.
            </ParagraphText>
            <ParagraphText>
              I&apos;ll try to get back to you within 24 hours during normal business days.
            </ParagraphText>
            <ContactForm />
          </motion.div>
        </div>
      </CenteredContainer>
    </PageLayout>
  );
};

export default Contact;
