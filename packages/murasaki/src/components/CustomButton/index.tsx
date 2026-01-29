import Link from 'next/link';
import { MouseEventHandler } from 'react';
import Spinner from '../Spinner';

export interface ButtonProps {
  text?: string;
  isLoading?: boolean;
  className?: string;
  textClassName?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  buttonType?: 'bordered' | 'flat';
  type?: 'button' | 'submit' | 'reset' | 'link';
  kind?:
    | 'default'
    | 'white'
    | 'dark'
    | 'success'
    | 'danger'
    | 'warning'
    | 'secondary'
    | 'yellow';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  tooltip?: string;
}

const CustomButton = ({ buttonType = 'flat', kind, ...props }: ButtonProps) => {
  let color = 'bg-accentBlue-400 text-white';

  if (buttonType == 'bordered') {
    color = 'bg-transparent text-dark-500 ';
  } else {
    switch (kind) {
      case 'default':
        color = 'bg-white/20 text-primary-foreground shadow';
        break;
      case 'white':
        color = 'bg-white text-black shadow';
        break;
      case 'yellow':
        color = 'bg-accentYellow text-white';
        break;
      case 'secondary':
        color = 'bg-dark-500 text-white';
        break;
      case 'success':
        color = 'bg-green-400 text-white';
        break;
      case 'danger':
        color = 'bg-red-500 text-white';
        break;
      case 'warning':
        color = 'bg-accentYellow text-black';
        break;
      default:
        break;
    }
  }

  if (props.type == 'link') {
    return (
      <Link
        title={props.tooltip}
        className={
          `${
            buttonType == 'bordered' ? 'border' : ''
          } ${color} flex items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-normal hover:opacity-95 ` +
          props.className
        }
        href={props.href!}
      >
        {props.isLoading ? (
          <Spinner />
        ) : (
          <div className="flex items-center justify-center">
            {props.prefix}
            <div className={props.textClassName}>{props.text}</div>
            {props.suffix}
          </div>
        )}
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick}
      title={props.tooltip}
      type={props.type ?? 'button'}
      className={`${
        buttonType == 'bordered' ? 'border' : ''
      } ${color} flex items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-normal hover:opacity-95 ${props.className}`}
    >
      {props.isLoading ? (
        <Spinner />
      ) : (
        <div className="flex items-center justify-center">
          {props.prefix}
          <div className={props.textClassName}>{props.text}</div>
          {props.suffix}
        </div>
      )}
    </button>
  );
};

export default CustomButton;
