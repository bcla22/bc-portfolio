export type ParagraphTextProps = { children: string; emphasis?: boolean };

const ParagraphText = ({ children, emphasis }: ParagraphTextProps) => {
  const classes = emphasis
    ? 'text-2xl font-light text-slate-600 mb-3'
    : 'text-lg font-light text-slate-600 mb-2';
  return <p className={classes}>{children}</p>;
};

export default ParagraphText;
