"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SideBarNavGroupProps {
  title: string;
  segment: string;
  children?: React.ReactNode;
}

const SideBarNavGroup = ({
  title,
  segment,
  children,
}: SideBarNavGroupProps) => {
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setToggle(pathName.startsWith("/" + segment) ? true : false);
  }, [pathName, setToggle, segment]);

  console.log(toggle);

  return (
    <div
      className={
        `px-3 py-2 text-white font-medium my-[2px] rounded-md flex flex-col items-start nav-group group ` +
        (toggle ? "bg-black" : "bg-black/60")
      }
    >
      <button
        className={
          `flex justify-between items-center w-full text-sm whitespace-nowrap ` +
          (toggle ? "mb-2" : "")
        }
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {title}
        {toggle ? (
          <ChevronUpIcon className="text-primaryGray-500" />
        ) : (
          <ChevronDownIcon className="text-primaryGray-500" />
        )}
      </button>
      {toggle ? children : <></>}
    </div>
  );
};

export default SideBarNavGroup;
