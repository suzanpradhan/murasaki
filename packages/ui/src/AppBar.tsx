import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export interface AppBarProps {
  leading?: React.ReactNode;
  children?: React.ReactNode;
  hasSideBar?: boolean;
  onSideBarToggle?: () => void;
}

export const AppBar = ({
  leading,
  children,
  hasSideBar = true,
  onSideBarToggle,
}: AppBarProps) => {
  return (
    <div className="flex flex-col sticky top-0 z-50 w-full">
      <div className="h-1 bg-violet-500"></div>
      <div className="h-12 bg-slate-950 flex justify-between items-center px-4 max-sm:px-3">
        <div className="max-w-[180px] h-full flex items-center gap-2">
          {hasSideBar ? (
            <button
              className="w-9 h-9 bg-slate-700 rounded-md flex items-center justify-center"
              onClick={onSideBarToggle}
            >
              <HamburgerMenuIcon className="text-white" fontSize={12} />
            </button>
          ) : (
            <></>
          )}
          {leading}
        </div>
        <div className="max-w-[160]px flex gap-2">{children}</div>
      </div>
    </div>
  );
};
