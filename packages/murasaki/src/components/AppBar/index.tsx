import { Menu } from 'lucide-react';

export interface AppBarProps {
  leading?: React.ReactNode;
  children?: React.ReactNode;
  hasSideBar?: boolean;
  onSideBarToggle?: () => void;
}

const AppBar = ({
  leading,
  children,
  hasSideBar = true,
  onSideBarToggle,
}: AppBarProps) => {
  return (
    <div className="sticky top-0 z-50 flex w-full flex-col bg-amber-400/80">
      <div className="bg-accentYellow h-1"></div>
      <div className="flex h-12 items-center justify-between bg-grayDark px-4 max-sm:px-3">
        <div className="flex h-full max-w-[180px] items-center gap-2">
          {hasSideBar ? (
            <button
              className="flex w-9 items-center justify-center rounded-md bg-blackShade lg:hidden"
              onClick={onSideBarToggle}
            >
              <Menu className="text-white" size={28} />
            </button>
          ) : (
            <></>
          )}
          <div className="ml-0 md:ml-4">{leading}</div>
        </div>
        <div className="flex w-max gap-2">{children}</div>
      </div>
    </div>
  );
};

export default AppBar;
