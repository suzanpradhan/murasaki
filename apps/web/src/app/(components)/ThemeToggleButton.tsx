'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from '@repo/ui/buttons';
import { useTheme } from '../providers/ThemeProviders';

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();
  return (
    <>
        <Button
          size='icon'
          onClick={toggleTheme}
          variant='default'
          prefix={theme === 'dark' ? <SunIcon fontSize={18} /> : <MoonIcon fontSize={18} />}
        />
    </>
  );
}