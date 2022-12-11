import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

export type InnerPageHeaderProps = { children: string; backHref: string };

const DESKTOP_ICONSIZE = 64;
const MOBILE_ICONSIZE = 48;

/**
 * @note  This component should be rendered client-side for `window` to be defined.
 */
const InnerPageHeader = ({ children, backHref }: InnerPageHeaderProps) => {
  const isDesktop = useMemo(() => window?.innerWidth > 1024, []);
  const [iconSize, setIconSize] = useState<number>(DESKTOP_ICONSIZE);

  /**
   * Sets the size of the "back" icon depending on viewport width
   */
  useEffect(() => {
    if (isDesktop && iconSize !== DESKTOP_ICONSIZE) {
      setIconSize(DESKTOP_ICONSIZE);
    }
    if (!isDesktop && iconSize !== MOBILE_ICONSIZE) {
      setIconSize(MOBILE_ICONSIZE);
    }
  }, [isDesktop, iconSize]);

  return (
    <div className="flex">
      <Link href={backHref}>
        <IoArrowBackCircleOutline size={iconSize} className={isDesktop ? 'mr-2' : 'mr-5'} />
      </Link>
      <h1 className="text-5xl lg:text-6xl font-medium mb-6 text-slate-900">{children}</h1>
    </div>
  );
};

export default InnerPageHeader;
