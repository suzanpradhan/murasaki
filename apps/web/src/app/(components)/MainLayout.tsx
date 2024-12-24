"use client";

import { AppBar } from "@repo/ui/appbar";
import { SideBarNavGroup } from "@repo/ui/sidebar";
import Link from "next/link";
import React, { useState } from "react";
import SideBarNavLink from "../../../../../packages/ui/src/sidebar/SideBarNavLink";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggle, setToggle] = useState(true);

  return (
    <main className="relative flex flex-col overflow-hidden h-svh">
      <AppBar
        onSideBarToggle={() => {
          setToggle(!toggle);
        }}
        leading={
          <Link href="/admin/dashboard" className="w-10 ml-1 relative">
            <div className="flex gap-2 items-center text-white w-64 font-medium">
              <div>LOGO</div>
              <div className="text-lg">|</div>
              <div>Murasaki</div>
            </div>
          </Link>
        }
      ></AppBar>
      <div className="flex-1 gap-2 overflow-hidden flex">
        <div
          className={`bg-blue-950 min-w-[15rem] flex flex-col px-2 py-4 left-0 absolute top-[3.25rem] h-full overflow-y-auto custom-scrollbar `}
        >
          <SideBarNavLink title="Button" link="/buttons" linkExact />
          <SideBarNavGroup title="Inputs" segment="inputs">
            <SideBarNavLink title="Text Inputs" link="/inputs" linkExact />
            <SideBarNavLink
              title="Switch Inputs"
              link="/inputs/switch-inputs"
              linkExact
            />
          </SideBarNavGroup>
        </div>
        <div
          className={
            `bg-white p-6 h-full flex-1 transition duration-200 ease-in-out absolute top-[3.25rem] max-lg:w-full left-[15.5rem] overflow-y-auto custom-scrollbar ` +
            (toggle ? "max-lg:-translate-x-[15.5rem]" : "")
          }
        >
          {children}
        </div>
      </div>
    </main>
  );
}
