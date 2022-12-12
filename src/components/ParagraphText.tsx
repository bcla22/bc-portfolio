import { motion } from 'framer-motion';
import { ITEM_VARIANTS } from '../config';

export type ParagraphTextProps = { children: string; emphasis?: boolean };

const ParagraphText = ({ children, emphasis }: ParagraphTextProps) => {
  const classes = emphasis
    ? 'text-2xl font-light text-slate-600 mb-3'
    : 'text-lg font-light text-slate-600 mb-2';
  return (
    <motion.p variants={ITEM_VARIANTS} className={classes}>
      {children}
    </motion.p>
  );
};

export default ParagraphText;
