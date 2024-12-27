export interface InputProps {
  label?: string;
  placeholder?: string;
  id: string;
  name?: string;
  type?: string;
  disabled?: boolean;
  isMulti?: boolean;
  rows?: number;
  className?: string;
  required?: boolean;
  suffix?: React.ReactNode;
}

const Inputs = ({
  className,
  isMulti = false,
  disabled = false,
  ...props
}: InputProps) => {
  return (
    <div className={`flex flex-col last-of-type:mb-0 ` + className}>
      {props.label ? (
        <label
          htmlFor={props.id}
          className="text-sm font-medium mb-2 text-dark-500"
        >
          {props.label}
          {props.required ? "*" : ""}
        </label>
      ) : (
        <></>
      )}
      {isMulti ? (
        <div className="flex border items-center rounded-md bg-slate-50">
          <textarea
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            cols={30}
            disabled={disabled}
            rows={props.rows}
            {...props}
          ></textarea>
          {props.suffix ? <div className="mr-2">{props.suffix}</div> : <></>}
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-end sm:items-center border-0 sm:border rounded-md bg-transparent sm:bg-slate-50">
          <input
            disabled={disabled}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            {...props}
          />
          {props.suffix ? (
            <div className="sm:mr-2 mt-2 sm:mt-0">{props.suffix}</div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export { Inputs };

{
  /* <input
  type={type}
  className={cn(
    "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    className
  )}
  ref={ref}
  {...props}
/> */
}
