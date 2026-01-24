interface FormGroupProps {
  title?: string;
  children: React.ReactNode;
}

const FormGroup = ({ title, children }: FormGroupProps) => {
  return (
    <div className="flex border-b border-b-border bg-grayTableHead/90 last-of-type:border-none max-md:flex-col">
      {title ? (
        <div className="text-dark-500 mr-2 w-full whitespace-nowrap p-4 pb-2 pt-4 font-bold max-md:mb-2 md:w-52">
          {title}
        </div>
      ) : (
        <></>
      )}

      <div className="flex flex-1 flex-col gap-4 bg-[#181818] p-4 pt-4 text-white">
        {children}
      </div>
    </div>
  );
};

export default FormGroup;
