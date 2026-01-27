export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  id: string;
  name?: string;
  type?: string;
  isMulti?: boolean;
  rows?: number;
  className?: string;
  required?: boolean;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  value?: string;
  inputClass?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const TextField = ({
  className,
  inputClass,
  prefix,
  isMulti = false,
  ...props
}: TextFieldProps) => {
  return (
    <div className={`flex flex-col last-of-type:mb-0 ` + className}>
      {props.label ? (
        <label
          htmlFor={props.id}
          className="text-dark-500 mb-2 text-sm font-medium"
        >
          {props.label}
          {props.required ? '*' : ''}
        </label>
      ) : (
        <></>
      )}
      {isMulti ? (
        <div className="flex items-center rounded-md bg-transparent">
          <textarea
            className={
              `h-40 w-full flex-1 py-2 outline-none focus:outline-none ` +
              inputClass
            }
            cols={30}
            rows={props.rows}
            {...props}
          ></textarea>
          {props.suffix ? <div>{props.suffix}</div> : <></>}
        </div>
      ) : (
        <div className="flex flex-row items-center rounded-md bg-transparent">
          {prefix ? <div>{prefix}</div> : <></>}
          <input
            className={
              `w-full flex-1 outline-none focus:outline-none ` + inputClass
            }
            {...props}
          />
          {props.suffix ? <div>{props.suffix}</div> : <></>}
        </div>
      )}
    </div>
  );
};

export default TextField;
