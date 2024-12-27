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
  loadingIcon = <></>,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const styles = {
    variants: {
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      outline:
        "border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    },
    sizes: {
      icon: "h-9 w-9 aspect-square rounded-md",
      lg: "h-10 rounded-lg px-8",
      sm: "h-8 rounded-md px-3 text-xs",
      default: "h-9 px-4 py-2",
    },
  };

  if (variant === "link" && href) {
    return (
      <Link href={href}>
        {prefix ? prefix : <></>}
        {isLoading ? loadingIcon : <p className={labelClassname}>{label}</p>}
        {suffix ? suffix : <></>}
      </Link>
    );
  }

  const buttonClassname = `${styles.variants[variant]} ${styles.sizes[size]} ${props.className ?? ""}`;
  return (
    <button
      className={buttonClassname + " flex items-center justify-center" + (props.className ?? "")}
      onClick={props.onClick}
    >
      {prefix ? prefix : <></>}
      {isLoading ? <>loadingIcon</> : <p className={labelClassname}>{label}</p>}
      {suffix ? suffix : <></>}
    </button>
  );
};
