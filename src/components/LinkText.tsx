import Link from 'next/link';
import { useMemo } from 'react';

export type LinkTextProps = { children: string; href: string };

const LinkText = ({ children, href }: LinkTextProps) => {
  const hrefIsExternal = useMemo(() => href.startsWith('https'), [href]);
  const classes = 'text-blue-600 font-medium hover:underline underline-offset-8';

  if (hrefIsExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <button className={classes}>{children}</button>
    </Link>
  );
};

export default LinkText;
