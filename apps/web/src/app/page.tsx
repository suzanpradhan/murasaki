import { AppBar } from "@repo/ui/appbar";
import Link from "next/link";
import Image from "next/image";

export default function Page(): JSX.Element {
  return (
    <main className="relative overflow-hidden">
      <AppBar
        leading={
          <Link href="/admin/dashboard" className="w-10 ml-1 relative">
            <div className="flex gap-2 items-center text-white w-64 font-medium">
              <div>LOGO</div>
              <div className="text-lg">|</div>
              <div>Administration</div>
            </div>
          </Link>
        }
      ></AppBar>
    </main>
  );
}
