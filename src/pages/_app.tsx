import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { PAGE_TRANSITIONS } from '../config';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} variants={PAGE_TRANSITIONS} initial="out" animate="in" exit="out">
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
