export interface RadioProps {
  id: string;
  label: string;
  value: string;
  nameGroup: string;
  selectedOption: string;
  onChange: (value: string) => void;
  className?: string;
  prefix?: React.ReactNode;
  children?: React.ReactNode;
}

const CustomRadioField = ({
  selectedOption,
  onChange,
  ...props
}: RadioProps) => {
  return (
    <>
      <input
        type="radio"
        id={props.id}
        name={props.nameGroup}
        value={props.value}
        checked={selectedOption === props.value} // Checking if selected
        onChange={() => onChange(props.value)}
        className="hidden"
      />
      <label
        htmlFor={props.id}
        className={`flex flex-1 items-center gap-2 rounded-md bg-black px-3 min-h-11 text-sm text-white/40 hover:cursor-pointer ${props.className}`}
      >
        {props.prefix && props.prefix}
        {/* {props.label} */}
        {props.children && props.children}
      </label>
    </>
  );
};

export default CustomRadioField;
