// import { lineSpinner } from "ldrs";
import Link from "next/link";
import * as React from "react";
import { MouseEventHandler } from "react";

// lineSpinner.register();1

export interface ButtonProps {
  label?: string;
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "link"
    | "secondary"
    | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
  loadingIcon?: React.ReactNode;
  labelClassname?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  type?: "button" | "submit" | "reset" | "link";
}

export const Button = ({
  type = "button",
  variant = "default",
  size = "default",
  prefix,
  suffix,
  href,
  label,
  labelClassname,
  // <l-line-spinner
  //   size="24"
  //   stroke="3"
  //   speed="1"
  //   color="black"
  // ></l-line-spinner>
  loadingIcon = <></>,
  isLoading = false,
  ...props
}: ButtonProps) => {
  let buttonClassname;

  switch (variant) {
    case "destructive":
      buttonClassname =
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90";
      break;

    case "ghost":
      buttonClassname = "hover:bg-accent hover:text-accent-foreground";
      break;

    case "link":
      buttonClassname = "text-primary underline-offset-4 hover:underline";
      break;

    case "outline":
      buttonClassname =
        "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground";
      break;

    case "secondary":
      buttonClassname =
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80";
      break;

    default:
      buttonClassname =
        "bg-primary text-primary-foreground shadow hover:bg-primary/90";

      break;
  }

  switch (size) {
    case "icon":
      buttonClassname = buttonClassname + " " + "h-9 w-9";
      break;

    case "lg":
      buttonClassname = buttonClassname + " " + "h-10 rounded-md px-8";
      break;

    case "sm":
      buttonClassname = buttonClassname + " " + "h-8 rounded-md px-3 text-xs";
      break;

    default:
      buttonClassname = buttonClassname + " " + "h-9 px-4 py-2";

      break;
  }

  if (variant === "link" && href) {
    return (
      <Link href={href}>
        {prefix ? prefix : <></>}
        {isLoading ? loadingIcon : <p className={labelClassname}>{label}</p>}
        {suffix ? suffix : <></>}
      </Link>
    );
  }
  return (
    <button
      className={buttonClassname + " " + (props.className ?? "")}
      onClick={props.onClick}
    >
      {prefix ? prefix : <></>}
      {isLoading ? <>loadingIcon</> : <p className={labelClassname}>{label}</p>}
      {suffix ? suffix : <></>}
    </button>
  );
};
