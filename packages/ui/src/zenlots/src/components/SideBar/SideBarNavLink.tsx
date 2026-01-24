'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface SideBarNavGroupProps {
  title?: string;
  link: string;
  linkExact?: boolean;
  logo?: ReactNode;
  onClick?: () => void;
  segment?: string;
}

const SideBarNavLink = ({
  title,
  link,
  linkExact = false,
  segment,
  logo,
  onClick,
}: SideBarNavGroupProps) => {
  const pathName = usePathname();
  const actualUrl = pathName.trim().replace(/^\/(global|np)/, '');
  const isActive = segment ? actualUrl.startsWith(segment) : linkExact ? link.trim() === actualUrl : link.startsWith(actualUrl);

  return (
    <Link
      href={link.trim()}
      onClick={onClick}
      className={
        `my-[2px] flex h-10 w-full items-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ` +
        (isActive ? 'bg-white text-blackShade' : 'text-gray-400')
      }
    >
      {logo && <span className="mr-2 flex-shrink-0">{logo}</span>} {title}
    </Link>
  );
};

export default SideBarNavLink;
