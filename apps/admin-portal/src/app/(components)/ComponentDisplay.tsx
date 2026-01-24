"use client";

import { useState } from "react";

export default function ComponentDisplay({
  label,
  component,
}: {
  label: string;
  component: React.ReactNode;
}) {
  const [isDisabled, toggleDisable] = useState(false);
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold">{label}</h2>

      <div className="flex w-full">
        <div className="flex-1">{component}</div>
      </div>
    </div>
  );
}
