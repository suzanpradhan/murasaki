'use client';

import { SelectSingleEventHandler } from 'react-day-picker';
import { Calendar } from '../../../../../../components/shadcnUi/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../../../../../components/shadcnUi/popover';
import { cn } from '../../../../../../lib/utils';

type AdditionalDateSelectorProps = {
  label?: string;
  value?: Date;
  id: string;
  className?: string;
  placeholder?: string;
  todayRequired?: boolean;
  disabled?: boolean;
  disabledBefore?: Date;
  disabledAfter?: Date;
  fromDate?: Date;
  onChange?: SelectSingleEventHandler;
};

export type DateSelectorProps = AdditionalDateSelectorProps;

const DateSelector = ({
  id,
  className,
  label,
  onChange,
  todayRequired = false,
  value,
  disabled,
  disabledBefore,
  disabledAfter,
  fromDate,
  ...props
}: DateSelectorProps) => {
  return (
    <div className={`basis-1/2 last-of-type:mb-0 ` + className}>
      {/* {label ? (
        <label htmlFor={id} className="text-sm mb-2 text-dark-500">
          {label}
          {label ? '*' : ''}
        </label>
      ) : (
        <></>
      )} */}
      <Popover>
        <div className="flex items-end gap-2">
          <PopoverTrigger asChild className="flex-1">
            <button
              type="button"
              className={cn(
                'text-dark-500 flex h-full flex-col items-start text-sm'
              )}
            >
              {
                <span className="text-dark-500 mb-2 text-sm font-medium">
                  <label htmlFor={id} className="text-dark-500 mb-2 text-sm">
                    {label}
                  </label>
                </span>
              }
              {/* <CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> */}
              <div className="flex min-h-[2.9rem] w-full flex-1 items-start rounded-md bg-blackShade px-4 py-3 text-sm focus:outline-none">
                {value ? (
                  `${value.getFullYear()} / ${value.getMonth() + 1} / ${value.getDate()}`
                ) : (
                  <span className="text-white/60">{props.placeholder}</span>
                )}
              </div>
            </button>
          </PopoverTrigger>
          {todayRequired ? (
            <button
              type="button"
              onClick={(e) => {
                const day = new Date();
                onChange?.(day, day, {}, e);
              }}
              className="flex min-h-[2.9rem] items-start rounded-md border bg-slate-50 px-4 py-3 text-sm focus:outline-none"
            >
              Today
            </button>
          ) : (
            <></>
          )}
        </div>

        <PopoverContent
          className="w-auto overflow-hidden border border-gray-500 p-0"
          align="start"
        >
          <Calendar
            mode="single"
            selected={value}
            onSelect={(day, selectedDay, activeModifiers, e) => {
              onChange?.(day, selectedDay, activeModifiers, e);
            }}
            className={'bg-blackPrimary'}
            fromDate={fromDate}
            disabled={
              disabled
                ? disabled
                : {
                    before: disabledBefore ?? new Date('1900-01-01'),
                    after: disabledAfter ?? new Date('2200-01-01'),
                  }
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateSelector;
