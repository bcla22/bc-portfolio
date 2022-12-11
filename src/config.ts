import { Variants } from 'framer-motion';

const isProduction: boolean = process.env.NODE_ENV === 'production';

export const SITE_NAME = 'BEN CLAUSI';
export const SITE_URL = isProduction ? 'https://benclausi.com' : 'http://localhost:3000';

export const PAGE_TRANSITIONS: Variants = {
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    y: 0,
  },
  out: { opacity: 0, transition: { duration: 0.4 }, y: -20 },
};
