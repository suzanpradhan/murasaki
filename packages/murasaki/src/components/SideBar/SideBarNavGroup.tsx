'use client';

import { ArrowDown2, ArrowRight2 } from 'iconsax-react';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface SideBarNavGroupProps {
  title: string;
  segment: string;
  children?: React.ReactNode;
  logo?: ReactNode;
}

const SideBarNavGroup = ({
  title,
  segment,
  children,
  logo,
}: SideBarNavGroupProps) => {
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setToggle(pathName.startsWith('/' + segment) ? true : false);
  }, [pathName, setToggle, segment]);

  return (
    <div
      className={
        `text-primaryGray-500 nav-group group my-[2px] flex flex-col items-start rounded-md px-3 py-2 font-medium text-gray-400 ` +
        (toggle ? 'bg-whiteShade' : '')
      }
    >
      <button
        className={
          `flex w-full items-center gap-2 whitespace-nowrap text-sm ` +
          (toggle ? 'mb-2' : '')
        }
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {logo && <span className="">{logo}</span>} {title}
        {toggle ? (
          <ArrowDown2 className="text-primaryGray-500" size={16} color="currentColor" />
        ) : (
          <ArrowRight2 className="text-primaryGray-500" size={16} color="currentColor" />
        )}
      </button>
      {toggle ? children : <></>}
    </div>
  );
};

export default SideBarNavGroup;
