export interface AppIconProps {
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

const AppIcon = ({
  className,
  inputClass,
  prefix,
  isMulti = false,
  ...props
}: AppIconProps) => {
  return (
    <div className={`flex flex-col last-of-type:mb-0 ${className || ''}`}>
      {props.label && (
        <label
          htmlFor={props.id}
          className="text-dark-500 mb-2 text-sm font-medium"
        >
          {props.label}
          {props.required ? '*' : ''}
        </label>
      )}
      {isMulti ? (
        <div className="flex items-start gap-2 rounded-md bg-transparent">
          {prefix && <div className="mt-2">{prefix}</div>}
          <textarea
            id={props.id}
            className={`h-40 w-full flex-1 py-2 outline-none focus:outline-none ${inputClass || ''}`}
            placeholder={props.placeholder}
            rows={props.rows}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
          />
          {props.suffix && <div>{props.suffix}</div>}
        </div>
      ) : (
        <div className="flex items-center gap-2 rounded-md bg-transparent">
          {prefix && <div>{prefix}</div>}
          <input
            id={props.id}
            type={props.type || 'text'}
            className={`w-full flex-1 outline-none focus:outline-none ${inputClass || ''}`}
            placeholder={props.placeholder}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
          />
          {props.suffix && <div>{props.suffix}</div>}
        </div>
      )}
    </div>
  );
};

export default AppIcon;
